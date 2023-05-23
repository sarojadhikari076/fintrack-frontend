import { Box, HStack, Heading } from '@chakra-ui/react'
import BudgetPlanModal from './BudgetPlanModal'
import { useFinance } from '@/hooks/useFinance'

export default function BudgetPlan() {
  const {
    financePlan: { income, expenseBudget, savings, investments }
  } = useFinance()

  const budgetItems = [
    {
      _id: '1',
      name: 'Income',
      value: income
    },
    {
      _id: '2',
      name: 'Expense budget',
      value: expenseBudget
    },
    {
      _id: '3',
      name: 'Savings',
      value: savings
    },
    {
      _id: '4',
      name: 'Investments',
      value: investments
    }
  ]

  return (
    <Box mb={10}>
      <HStack mb={5} gap={4}>
        <Heading size="md">My budget plan</Heading>
        <BudgetPlanModal />
      </HStack>

      <HStack justify="space-between" wrap="wrap" gap={5}>
        {budgetItems.map(({ _id, name, value }) => (
          <Box key={_id} p={5} flex={1} rounded="md" bg="blue.500">
            <Heading size="xs" color="gray.300">
              {name}
            </Heading>
            <Heading size="lg" color="white">
              ${value}
            </Heading>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}
