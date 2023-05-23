import { Inter } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import BudgetPlan from '@/components/finance/BudgetPlan'
import Expenses from '@/components/finance/Expenses'
import NextHead from '@/components/common/NextHead'
import { useEffect } from 'react'
import { AuthState } from '@/interfaces/user'
import { useRouter } from 'next/router'
import { LOGIN } from '@/constants/routes'
import { useAuth } from '@/hooks/useAuth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { replace } = useRouter()
  const { authState } = useAuth()

  useEffect(() => {
    if (authState === AuthState.UNAUTHENTICATED) replace(LOGIN)
  }, [authState, replace])

  if (authState === AuthState.AUTHENTICATING) return null
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
