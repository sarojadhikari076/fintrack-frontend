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
  FormErrorMessage
} from '@chakra-ui/react'

export default function BudgetPlanModal() {
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
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid #DDD">
            Edit budget plan
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody as={VStack} spacing={5} my={4}>
            <FormControl isInvalid>
              <FormLabel>Income</FormLabel>
              <Input placeholder="Enter your income" />
              <FormErrorMessage>Income should be at least $1</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid>
              <FormLabel>Expense budget</FormLabel>
              <Input placeholder="Enter your expense budget" />
              <FormErrorMessage>
                Expense budget should be at least $1
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid>
              <FormLabel>Investment amount</FormLabel>
              <Input placeholder="Enter your investment amount" />
              <FormErrorMessage>
                Investment amount should be at least $1
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
