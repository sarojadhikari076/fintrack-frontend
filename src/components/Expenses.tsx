import { Box, Button, HStack, Heading, Input, Select } from '@chakra-ui/react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseTable from './ExpenseTable'

export default function Expenses() {
  return (
    <Box>
      <HStack mb={4} gap={4}>
        <Heading size="md">My expenses</Heading>
        <Button colorScheme="blue" variant="outline" px={8} size="sm">
          Add
        </Button>
      </HStack>
      <ExpenseFilter />
      <ExpenseTable />
    </Box>
  )
}
