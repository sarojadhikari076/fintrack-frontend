import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Navbar from '@/components/common/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Container py={10} maxW="container.xl">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
