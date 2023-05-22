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
  Input,
  VStack,
  FormErrorMessage,
  Select
} from '@chakra-ui/react'

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
            <FormControl isInvalid>
              <FormLabel>Name</FormLabel>
              <Input placeholder="e.g. Buy a movie ticket" />
              <FormErrorMessage>
                Name should be at least 3 characters
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid>
              <FormLabel>Price</FormLabel>
              <Input placeholder="e.g. $5" />
              <FormErrorMessage>Price should be at least $1</FormErrorMessage>
            </FormControl>

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

            <FormControl isInvalid>
              <FormLabel>Remarks</FormLabel>
              <Input placeholder="e.g. Went to watch Bahubali 2" />
              <FormErrorMessage>
                Remarks should be at least 3 characters
              </FormErrorMessage>
            </FormControl>
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
