import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import BudgetPlan from '@/components/BudgetPlan'
import Expenses from '@/components/Expenses'

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

      <Navbar />
      <Container py={10} maxW="container.xl" className={inter.className}>
        <BudgetPlan />
        <Expenses />
      </Container>
    </>
  )
}
