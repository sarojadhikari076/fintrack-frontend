import {
  expenseCategories,
  expenseDateOptions,
  sortOptions
} from '@/constants/finance'
import { useFinance } from '@/hooks/useFinance'
import { FieldName } from '@/interfaces/searchFilter'
import { HStack, Input, Select } from '@chakra-ui/react'

export default function ExpenseFilter() {
  const {
    filterQuery: { category, date, q, sort },
    updateFilterQuery
  } = useFinance()

  return (
    <HStack mb={5} wrap={['wrap', null, 'nowrap']} gap={2}>
      <Input
        placeholder="Search your expenses..."
        value={q}
        onChange={({ target: { value } }) =>
          updateFilterQuery(FieldName.Q, value)
        }
      />
      <Select
        placeholder="Date"
        maxW={40}
        value={date}
        onChange={({ target: { value } }) =>
          updateFilterQuery(FieldName.Date, value)
        }
      >
        {expenseDateOptions.map(({ label, value }) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Category"
        maxW={40}
        value={category}
        onChange={({ target: { value } }) =>
          updateFilterQuery(FieldName.Category, value)
        }
      >
        {expenseCategories.map((label) => (
          <option value={label} key={label}>
            {label}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Sort by"
        maxW={40}
        value={sort}
        onChange={({ target: { value } }) =>
          updateFilterQuery(FieldName.Sort, value)
        }
      >
        {sortOptions.map(({ label, value }) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </Select>
    </HStack>
  )
}
