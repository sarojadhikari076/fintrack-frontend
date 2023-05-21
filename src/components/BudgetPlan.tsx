import { Box, Button, HStack, Heading } from '@chakra-ui/react'

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
    <Box mb={12}>
      <HStack mb={8} gap={4}>
        <Heading size="md">My budget plan</Heading>
        <Button colorScheme="blue" variant="outline" px={8} size="sm">
          Edit
        </Button>
      </HStack>

      <HStack justify="space-between" wrap="wrap">
        {budgetItems.map(({ _id, name, value }) => (
          <HStack key={_id} p={5} gap={12} rounded="md" bg="blue.500">
            <Heading size="xs" color="gray.300">
              {name}
            </Heading>
            <Heading size="md" color="white">
              {value}
            </Heading>
          </HStack>
        ))}
      </HStack>
    </Box>
  )
}
