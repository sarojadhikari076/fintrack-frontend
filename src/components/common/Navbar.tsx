import { useAuth } from '@/hooks/useAuth'
import { AuthState } from '@/interfaces/user'
import { Box, Button, Container, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar() {
  const { logout, authState } = useAuth()
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
        <Heading size="lg" color="blue.800" as={Link} href="/">
          FinTrack
        </Heading>
        <Button colorScheme="red" onClick={logout}>
          {authState === AuthState.AUTHENTICATED ? 'Log out' : 'Login'}
        </Button>
      </Container>
    </Box>
  )
}
