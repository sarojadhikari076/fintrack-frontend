import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td
} from '@chakra-ui/react'

const expenditureList = [
  {
    _id: '1',
    name: 'Groceries',
    price: 50.25,
    category: 'Food',
    remarks: 'Weekly grocery shopping'
  },
  {
    _id: '2',
    name: 'Movie ticket',
    price: 12.5,
    category: 'Entertainment',
    remarks: 'Watched a new release'
  },
  {
    _id: '3',
    name: 'Gas bill',
    price: 30.75,
    category: 'Utilities',
    remarks: 'Monthly gas bill payment'
  },
  {
    _id: '4',
    name: 'Restaurant dinner',
    price: 65.0,
    category: 'Food',
    remarks: 'Celebrated a special occasion'
  },
  {
    _id: '5',
    name: 'Clothing',
    price: 45.99,
    category: 'Shopping',
    remarks: 'Bought new summer clothes'
  },
  {
    _id: '6',
    name: 'Gym membership',
    price: 80.0,
    category: 'Fitness',
    remarks: 'Monthly gym subscription'
  },
  {
    _id: '7',
    name: 'Mobile phone bill',
    price: 45.5,
    category: 'Utilities',
    remarks: 'Monthly phone bill payment'
  },
  {
    _id: '8',
    name: 'Concert ticket',
    price: 75.0,
    category: 'Entertainment',
    remarks: 'Attended a live concert'
  },
  {
    _id: '9',
    name: 'Coffee',
    price: 4.75,
    category: 'Food',
    remarks: 'Bought coffee on the way to work'
  },
  {
    _id: '10',
    name: 'Books',
    price: 22.99,
    category: 'Shopping',
    remarks: 'Purchased new novels'
  },
  {
    _id: '11',
    name: 'Car wash',
    price: 15.0,
    category: 'Automotive',
    remarks: 'Got the car cleaned'
  }
]

export default function ExpenseTable() {
  return (
    <TableContainer border="1px solid #DDD" rounded="md">
      <Table variant="striped" colorScheme="blue">
        <TableCaption>My expenditure list</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Cost</Th>
            <Th>Category</Th>
            <Th>Remarks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenditureList.map(({ _id, category, name, price, remarks }) => (
            <Tr key={_id}>
              <Td>{name}</Td>
              <Td>$ {price}</Td>
              <Td>{category}</Td>
              <Td>{remarks}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
