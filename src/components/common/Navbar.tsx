import { LOGIN } from '@/constants/routes'
import { Box, Button, Container, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { replace } = useRouter()
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
        <Button colorScheme="red" onClick={() => replace(LOGIN)}>
          Log out
        </Button>
      </Container>
    </Box>
  )
}
