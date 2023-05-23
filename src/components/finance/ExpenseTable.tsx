import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton
} from '@chakra-ui/react'
import { formatDate } from '../../utils/date'
import { useFinance } from '@/hooks/useFinance'

const tableHeader = [
  'S.N.',
  'Name',
  'Price',
  'Category',
  'Date',
  'Remarks',
  'Actions'
]

function ActionButtons() {
  return (
    <>
      <IconButton aria-label="Edit" size="xs" colorScheme="yellow" isRound>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="Delete" size="xs" colorScheme="red" isRound>
        <DeleteIcon />
      </IconButton>
    </>
  )
}

export default function ExpenseTable() {
  const { expenditures } = useFinance()

  // TODO: Add loading state of the table
  return (
    <TableContainer border="1px solid #DDD" rounded="md">
      <Table variant="striped" colorScheme="blue">
        <TableCaption>My expenditure list</TableCaption>
        <Thead>
          <Tr>
            {tableHeader.map((label) => (
              <Th key={label}>{label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {expenditures.map(
            ({ _id, category, name, price, createdAt, remarks }, idx) => (
              <Tr key={_id}>
                <Td>{idx + 1}</Td>
                <Td>{name}</Td>
                <Td>${price}</Td>
                <Td>{category}</Td>
                <Td>{formatDate(createdAt)}</Td>
                <Td>{remarks}</Td>
                <Td display="flex" gap={2}>
                  <ActionButtons />
                </Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
