import * as yup from 'yup'

const addExpenditureSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  category: yup.string().required('Category is required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .required('Price is required')
    .positive('Price must be a positive number'),
  remarks: yup.string().min(3, 'Remarks must be at least 3 characters')
})

export default addExpenditureSchema
