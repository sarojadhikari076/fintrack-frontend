import { categoryOption, expenseDateOptions } from '@/constants/finance'
import { HStack, Input, Select } from '@chakra-ui/react'

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
