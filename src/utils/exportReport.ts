import { FileType, IExpenditure, IFinancePlan } from '@/interfaces/finance'
import * as XLSX from 'xlsx'
import { formatDate } from './date'

// Function to convert financePlan and expenditures data to XLSX or CSV and download the file
export function exportReport(
  financePlan: IFinancePlan,
  expenditures: IExpenditure[],
  fileType: FileType
) {
  let workbook: XLSX.WorkBook
  let fileExtension: string
  let fileName: string
  const formattedExp = formatExpenditures(expenditures)
  const formattedFinance = formatFinancePlan(financePlan)

  switch (fileType) {
    case FileType.XLSX:
      workbook = XLSX.utils.book_new()
      const financePlanWorksheet = XLSX.utils.json_to_sheet([
        formatFinancePlan(financePlan)
      ]) // Invoke the function with financePlan argument
      const expendituresWorksheet = XLSX.utils.json_to_sheet(formattedExp)
      XLSX.utils.book_append_sheet(
        workbook,
        financePlanWorksheet,
        'Finance Plan'
      )
      XLSX.utils.book_append_sheet(
        workbook,
        expendituresWorksheet,
        'Expenditures'
      )
      fileExtension = 'xlsx'
      fileName = 'fintrack-report.xlsx'
      break

    case FileType.CSV:
      const data = [...formattedExp, formattedFinance]
      const csvContent = XLSX.utils.sheet_to_csv(XLSX.utils.json_to_sheet(data))
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'fintrack-report.csv'
      link.click()
      window.URL.revokeObjectURL(link.href)
      return

    default:
      console.error('Unsupported file type')
      return
  }

  const fileContent = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' })
  const blob = new Blob([fileContent], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = fileName
  link.click()
  window.URL.revokeObjectURL(link.href)
}

function formatExpenditures(expenditures: IExpenditure[]) {
  return expenditures.map((expenditure, idx) => {
    const { _id, __v, user, createdAt, updatedAt, price, remarks, ...rest } =
      expenditure

    return {
      SN: idx + 1,
      ...rest,
      price: `$${price}`,
      createdAt: formatDate(createdAt),
      updatedAt: formatDate(updatedAt),
      remarks: remarks || '--'
    }
  })
}

function formatFinancePlan(financePlan: IFinancePlan) {
  const {
    _id,
    __v,
    user,
    income,
    investments,
    savings,
    expenseBudget,
    createdAt,
    updatedAt,
    ...rest
  } = financePlan

  return {
    ...rest,
    income: `$${income}`,
    investments: `$${investments}`,
    savings: `$${savings}`,
    expenseBudget: `$${expenseBudget}`,
    createdAt: formatDate(createdAt),
    updatedAt: formatDate(updatedAt)
  }
}
