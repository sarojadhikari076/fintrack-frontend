import { expenditureList } from '@/constants/finance'
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
import { formatDate } from '../utils/date'

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
  return (
    <TableContainer border="1px solid #DDD" rounded="md">
      <Table variant="striped" colorScheme="blue">
        <TableCaption>My expenditure list</TableCaption>
        <Thead>
          <Tr>
            <Th>S.N.</Th>
            <Th>Name</Th>
            <Th>Cost</Th>
            <Th>Category</Th>
            <Th>Date</Th>
            <Th>Remarks</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenditureList.map(
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
