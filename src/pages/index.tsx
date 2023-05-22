import { Inter } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import BudgetPlan from '@/components/finance/BudgetPlan'
import Expenses from '@/components/finance/Expenses'
import NextHead from '@/components/common/NextHead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NextHead title="Home" description="Finance tracker app" />
      <Box className={inter.className}>
        <BudgetPlan />
        <Expenses />
      </Box>
    </>
  )
}
