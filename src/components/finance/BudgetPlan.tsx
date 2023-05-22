import { Box, HStack, Heading } from '@chakra-ui/react'
import BudgetPlanModal from './BudgetPlanModal'

const budgetItems = [
  {
    _id: '1',
    name: 'Income',
    value: '$5000'
  },
  {
    _id: '2',
    name: 'Expense budget',
    value: '$2000'
  },
  {
    _id: '3',
    name: 'Savings',
    value: '$1000'
  },
  {
    _id: '4',
    name: 'Investments',
    value: '$1000'
  }
]

export default function BudgetPlan() {
  return (
    <Box mb={16}>
      <HStack mb={5} gap={4}>
        <Heading size="md">My budget plan</Heading>
        <BudgetPlanModal />
      </HStack>

      <HStack justify="space-between" wrap="wrap" gap={5}>
        {budgetItems.map(({ _id, name, value }) => (
          <HStack
            key={_id}
            p={5}
            flex={1}
            justify="space-between"
            rounded="md"
            bg="blue.500"
          >
            <Heading size="xs" color="gray.300">
              {name}
            </Heading>
            <Heading size="lg" color="white">
              {value}
            </Heading>
          </HStack>
        ))}
      </HStack>
    </Box>
  )
}
