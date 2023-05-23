import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Navbar from '@/components/common/Navbar'
import { AuthProvider } from '@/hooks/useAuth'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar />
        <Container py={10} maxW="container.xl">
          <Component {...pageProps} />
        </Container>
      </AuthProvider>
    </ChakraProvider>
  )
}
