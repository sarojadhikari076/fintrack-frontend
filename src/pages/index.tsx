import { Inter } from 'next/font/google'
import { Container } from '@chakra-ui/react'
import BudgetPlan from '@/components/finance/BudgetPlan'
import Expenses from '@/components/finance/Expenses'
import NextHead from '@/components/common/NextHead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NextHead title="Finance tracker app" description="Finance tracker app" />
      <Container py={10} maxW="container.xl" className={inter.className}>
        <BudgetPlan />
        <Expenses />
      </Container>
    </>
  )
}
