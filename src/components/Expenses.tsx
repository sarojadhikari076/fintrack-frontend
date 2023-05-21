import { Box, Button, HStack, Heading, Input } from '@chakra-ui/react'

export default function Expenses() {
  return (
    <Box>
      <HStack mb={4} gap={4}>
        <Heading size="md">My expenses</Heading>
        <Button colorScheme="blue" variant="outline" px={8} size="sm">
          Add
        </Button>
      </HStack>
      <Box>
        <Input placeholder="Search your expenses..." />
      </Box>
    </Box>
  )
}
