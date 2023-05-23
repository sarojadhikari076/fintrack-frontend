import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
      'Password must contain at least one uppercase letter and one special symbol'
    )
    .required('Password is required')
})

export default loginSchema
