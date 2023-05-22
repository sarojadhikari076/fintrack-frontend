import { Box, Button, HStack, Heading, Input, Select } from '@chakra-ui/react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseTable from './ExpenseTable'
import AddExpenseModal from './AddExpenseModal'

export default function Expenses() {
  return (
    <Box>
      <HStack mb={4} gap={4}>
        <Heading size="md">My expenses</Heading>
        <AddExpenseModal />
      </HStack>
      <ExpenseFilter />
      <ExpenseTable />
    </Box>
  )
}
