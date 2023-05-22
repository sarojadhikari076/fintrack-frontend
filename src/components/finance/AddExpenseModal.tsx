import { categoryOption } from '@/constants/finance'
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
import CustomInputGroup from '../common/CustomInputGroup'

export default function AddExpenseModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid #DDD">
            Add an expense
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody as={VStack} spacing={3} my={4}>
            <CustomInputGroup
              name="name"
              placeholder="e.g. Buy a movie ticket"
              label="Name"
              error="Name should be at least 3 characters"
            />
            <CustomInputGroup
              name="price"
              placeholder="e.g. $5"
              label="Price"
              error="Price should be at least $1"
            />

            <FormControl isInvalid>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select category">
                {categoryOption.map(({ label, value }) => (
                  <option value={value} key={label}>
                    {label}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>Please select a category</FormErrorMessage>
            </FormControl>

            <CustomInputGroup
              name="remarks"
              placeholder="e.g. Went to watch Bahubali 2"
              label="Price"
              error="Remarks should be at least 3 characters"
            />
          </ModalBody>

          <ModalFooter borderTop="1px solid #DDD">
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Update plan</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
