import { categoryOption, expenseDateOptions } from '@/constants/finance'
import { HStack, Input, Select } from '@chakra-ui/react'

export default function ExpenseFilter() {
  return (
    <HStack mb={5} wrap={['wrap', null, 'nowrap']} gap={2}>
      <Input placeholder="Search your expenses..." />
      <Select placeholder="Select date range" maxW={['auto', null, 'max']}>
        {expenseDateOptions.map(({ label, value }) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </Select>
      <Select placeholder="Select category" maxW={['auto', null, 'max']}>
        {categoryOption.map(({ label, value }) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </Select>
    </HStack>
  )
}
