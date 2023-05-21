import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button, Container } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Finance Tracker App</title>
        <meta name="description" content="Finance tracker app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" className={inter.className}>
        <Button>Click me</Button>
      </Container>
    </>
  )
}
