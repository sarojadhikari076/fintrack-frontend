// TypeScript types for finance-related data
export interface IFinancePlan {
  _id: string
  user: string
  createdAt: Date
  expenseBudget: number
  income: number
  investments: number
  savings: number
  updatedAt: Date
}

export interface IExpenditure {
  _id: string
  user: string
  name: string
  price: number
  category: string
  remarks: string
  createdAt: Date
  updatedAt: Date
}
