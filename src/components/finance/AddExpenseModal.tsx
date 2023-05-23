import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  VStack,
  FormErrorMessage,
  Select
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import CustomInputGroup from '../common/CustomInputGroup'
import { expenseCategories } from '@/constants/finance'
import addExpenditureSchema from '@/schemas/addExpenditureSchema'
import { post } from '@/services/http'
import { EXPENDITURE } from '@/constants/routes'
import useCustomToast from '@/hooks/useCustomToast'
import { parseAxiosError } from '@/utils/axios'
import { useFinance } from '@/hooks/useFinance'

export default function AddExpenseModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { showToast } = useCustomToast()
  const { updateExpenditure } = useFinance()

  function handleModalClose() {
    resetForm()
    onClose()
  }

  const {
    errors,
    getFieldProps,
    isSubmitting,
    isValid,
    handleSubmit,
    resetForm
  } = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      remarks: ''
    },
    onSubmit: async (data) => {
      try {
        const { message, expenditure } = await post({
          endpoint: EXPENDITURE,
          data
        })
        updateExpenditure(expenditure)
        showToast(message, 'success')
        handleModalClose()
      } catch (error) {
        showToast(parseAxiosError(error), 'error')
      }
    },
    validationSchema: addExpenditureSchema,
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: true
  })

  return (
    <>
      <Button
        colorScheme="blue"
        variant="outline"
        px={8}
        size="sm"
        onClick={onOpen}
      >
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={handleModalClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid #DDD">
            Add an expense
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody as={VStack} spacing={3} my={4}>
              <CustomInputGroup
                {...getFieldProps('name')}
                placeholder="e.g. Buy a movie ticket"
                label="Name"
                error={errors.name}
              />
              <CustomInputGroup
                {...getFieldProps('price')}
                type="number"
                placeholder="e.g. $5"
                label="Price"
                error={errors.price}
              />

              <FormControl isInvalid={!!errors.category}>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select category"
                  {...getFieldProps('category')}
                >
                  {expenseCategories.map((label) => (
                    <option value={label} key={label}>
                      {label}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.category}</FormErrorMessage>
              </FormControl>

              <CustomInputGroup
                {...getFieldProps('remarks')}
                placeholder="e.g. Went to watch Bahubali 2"
                label="Remarks"
                error={errors.remarks}
              />
            </ModalBody>

            <ModalFooter borderTop="1px solid #DDD">
              <Button mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                type="submit"
                isLoading={isSubmitting}
                isDisabled={!isValid || isSubmitting}
              >
                Add expense
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
