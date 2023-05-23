import { EXPENDITURE, FINANCE } from '@/constants/routes'
import { IExpenditure, IFinancePlan } from '@/interfaces/finance'
import { FieldName, FilterQuery } from '@/interfaces/searchFilter'
import { get } from '@/services/http'
import { createContext, useContext, useEffect, useState } from 'react'

interface FinanceState {
  isFetching: boolean
  financePlan: IFinancePlan
  expenditures: IExpenditure[]
}

interface FinanceContextProps extends FinanceState {
  updateExpenditure: (data: IExpenditure) => void
  deleteExpenditure: (expenseId: string) => void
  updateFinance: (data: IFinancePlan) => void
  getFinance: () => void
  filterQuery: FilterQuery
  updateFilterQuery: (field: FieldName, val: string | number) => void
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
  const [filterQuery, setFilterQuery] = useState<FilterQuery>({
    date: '',
    q: '',
    category: '',
    sort: 'createdAt:-1'
  })

  const updateFilterQuery = (field: FieldName, value: string | number) => {
    setFilterQuery((prev) => ({ ...prev, [field]: value }))
  }

  const updateExpenditure = (data: IExpenditure) => {
    setExpenditures((prev) => [data, ...prev])
  }

  const deleteExpenditure = (expenseId: string) => {
    const remainingExp = expenditures.filter(({ _id }) => _id !== expenseId)
    setExpenditures(remainingExp)
  }

  const updateFinance = (data: IFinancePlan) => {
    setFinancePlan(data)
  }

  const getFinance = async () => {
    try {
      setIsFetching(true)
      const { financePlan } = await get({ endpoint: FINANCE })
      setFinancePlan(financePlan)
    } catch (error) {
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    getFinance()
  }, [])

  useEffect(() => {
    // IFFE to fetch expenditures list every time the query parameters change
    ;(async () => {
      try {
        setIsFetching(true)
        const { expenditures } = await get({
          endpoint: EXPENDITURE,
          config: {
            params: {
              ...filterQuery
            }
          }
        })
        setExpenditures(expenditures)
      } catch (error) {
      } finally {
        setIsFetching(false)
      }
    })()
  }, [filterQuery])

  const financeContextValue: FinanceContextProps = {
    isFetching,
    financePlan,
    expenditures,
    updateExpenditure,
    deleteExpenditure,
    updateFinance,
    getFinance,
    filterQuery,
    updateFilterQuery
  }

  return (
    <FinanceContext.Provider value={financeContextValue}>
      {children}
    </FinanceContext.Provider>
  )
}

export { FinanceContext, useFinance, FinanceProvider }
