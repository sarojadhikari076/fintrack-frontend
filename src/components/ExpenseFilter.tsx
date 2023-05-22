import { HStack, Input, Select } from '@chakra-ui/react'

const expenseDateOptions = [
  {
    label: 'Monthly',
    value: 'MONTH'
  },
  {
    label: 'Weekly',
    value: 'WEEK'
  },
  {
    label: 'Daily',
    value: 'DAY'
  }
]

const categoryOption = [
  {
    label: 'Electricity bill',
    value: 'ELECTRICITY'
  },
  {
    label: 'Rent',
    value: 'RENT'
  },
  {
    label: 'Clothings',
    value: 'CLOTH'
  },
  {
    label: 'Miscellaneous',
    value: 'MISC'
  }
]

export default function ExpenseFilter() {
  return (
    <HStack mb={5}>
      <Input placeholder="Search your expenses..." />
      <Select placeholder="Select date range" maxW="max">
        {expenseDateOptions.map(({ label, value }) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </Select>
      <Select placeholder="Select category" maxW="max">
        {categoryOption.map(({ label, value }) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </Select>
    </HStack>
  )
}
