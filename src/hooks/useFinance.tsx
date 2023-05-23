import { EXPENDITURE, FINANCE } from '@/constants/routes'
import { IExpenditure, IFinancePlan } from '@/interfaces/finance'
import { get } from '@/services/http'
import { createContext, useContext, useEffect, useState } from 'react'

interface FinanceState {
  isFetching: boolean
  financePlan: IFinancePlan
  expenditures: IExpenditure[]
}

interface FinanceContextProps extends FinanceState {
  updateExpenditure: (data: IExpenditure) => void
  updateFinance: (data: IFinancePlan) => void
  getFinance: () => void
  deleteFinance: (id: string) => void
}

const FinanceContext = createContext<FinanceContextProps>(
  {} as FinanceContextProps
)

const useFinance = (): FinanceContextProps => {
  const financeContext = useContext(FinanceContext)

  if (financeContext === undefined) {
    throw new Error('useFinance must be used within a FinanceProvider')
  }

  return financeContext
}

interface FinanceProviderProps {
  children: React.ReactNode
}

const FinanceProvider: React.FC<FinanceProviderProps> = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false)
  const [financePlan, setFinancePlan] = useState<IFinancePlan>(
    {} as IFinancePlan
  )
  const [expenditures, setExpenditures] = useState<IExpenditure[]>([])

  const updateExpenditure = (data: IExpenditure) => {
    setExpenditures((prev) => [data, ...prev])
  }

  const updateFinance = (data: IFinancePlan) => {
    setFinancePlan(data)
  }

  const getFinance = async () => {
    try {
      setIsFetching(true)
      const { financePlan } = await get({ endpoint: FINANCE })
      const { expenditures } = await get({ endpoint: EXPENDITURE })
      setFinancePlan(financePlan)
      setExpenditures(expenditures)
    } catch (error) {
      console.log('ERROR FETCHING FINANCE: ', error)
    } finally {
      setIsFetching(false)
    }
  }

  const deleteFinance = (id: string) => {
    // Implementation for deleting a finance plan
  }

  useEffect(() => {
    getFinance()
  }, [])

  const financeContextValue: FinanceContextProps = {
    isFetching,
    financePlan,
    expenditures,
    updateExpenditure,
    updateFinance,
    getFinance,
    deleteFinance
  }

  return (
    <FinanceContext.Provider value={financeContextValue}>
      {children}
    </FinanceContext.Provider>
  )
}

export { FinanceContext, useFinance, FinanceProvider }
