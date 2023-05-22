import { Box, Button, Container, Heading } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box
      shadow="md"
      bg="gray.50"
      py={4}
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
      >
        <Heading size="lg">Finance Tracker App</Heading>
        <Button colorScheme="red">Log out</Button>
      </Container>
    </Box>
  )
}
