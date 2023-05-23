import * as Yup from 'yup'

const editFinancePlanSchema = Yup.object()
  .shape({
    income: Yup.number()
      .min(0, 'Income must be greater than or equal to 0')
      .required('Income is required'),
    savings: Yup.number()
      .min(0, 'Savings must be greater than or equal to 0')
      .required('Savings is required'),
    investments: Yup.number()
      .min(0, 'Investments must be greater than or equal to 0')
      .required('Investments is required')
  })
  .test(
    'income-validation',
    'Sum of savings and investments cannot exceed income',
    function (value) {
      const { income, savings, investments } = value as {
        income: number
        savings: number
        investments: number
      }

      if (income && savings && investments) {
        return income >= savings + investments
      }

      return true // Pass the validation if any of the fields are missing
    }
  )

export default editFinancePlanSchema
