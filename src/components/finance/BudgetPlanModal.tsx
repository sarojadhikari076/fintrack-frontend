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
  VStack
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import CustomInputGroup from '../common/CustomInputGroup'
import editFinancePlanSchema from '@/schemas/financePlanSchema'
import { patch } from '@/services/http'
import { FINANCE } from '@/constants/routes'
import useCustomToast from '@/hooks/useCustomToast'
import { parseAxiosError } from '@/utils/axios'
import { useFinance } from '@/hooks/useFinance'
import { useEffect } from 'react'

export default function BudgetPlanModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { showToast } = useCustomToast()
  const {
    updateFinance,
    financePlan: { income, investments, savings, expenseBudget }
  } = useFinance()

  const {
    getFieldProps,
    errors,
    handleSubmit,
    isSubmitting,
    isValid,
    setFieldValue
  } = useFormik({
    initialValues: {
      income: 0,
      investments: 0,
      savings: 0,
      expenseBudget: 0
    },
    validationSchema: editFinancePlanSchema,
    onSubmit: async (data) => {
      try {
        const { financePlan, message } = await patch({
          endpoint: FINANCE,
          data
        })
        updateFinance(financePlan)
        showToast(message, 'success')
        onClose()
      } catch (error) {
        showToast(parseAxiosError(error), 'error')
      }
    }
  })

  useEffect(() => {
    // IFFE for updating values everytime it changes
    ;(async () => {
      await setFieldValue('savings', savings)
      await setFieldValue('expenseBudget', expenseBudget)
      await setFieldValue('income', income)
      await setFieldValue('investments', investments)
    })()
  }, [expenseBudget, income, investments, savings, setFieldValue])

  return (
    <>
      <Button
        colorScheme="blue"
        variant="outline"
        px={8}
        size="sm"
        onClick={onOpen}
      >
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid #DDD">
            Edit budget plan
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody as={VStack} spacing={5} my={4}>
              <CustomInputGroup
                {...getFieldProps('income')}
                type="number"
                placeholder="e.g. 5000"
                label="Income"
                error={errors.income}
              />
              <CustomInputGroup
                {...getFieldProps('investments')}
                type="number"
                placeholder="e.g. 1000"
                label="Investment amount"
                error={errors.investments}
              />
              <CustomInputGroup
                {...getFieldProps('savings')}
                type="number"
                placeholder="e.g. 2000"
                label="Saving amount"
                error={errors.savings}
              />
              <CustomInputGroup
                type="number"
                placeholder="e.g. 2000"
                label="Expense budget(Autogenerated)"
                isReadOnly
                isDisabled
                value={expenseBudget}
              />
            </ModalBody>
            <ModalFooter borderTop="1px solid #DDD">
              <Button mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                type="submit"
                isDisabled={!isValid || isSubmitting}
                isLoading={isSubmitting}
              >
                Update plan
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
