import CustomInputGroup from '@/components/common/CustomInputGroup'
import NextHead from '@/components/common/NextHead'
import { HOME, LOGIN, REGISTER } from '@/constants/routes'
import { ACCESS_TOKEN } from '@/constants/text'
import { useAuth } from '@/hooks/useAuth'
import useCustomToast from '@/hooks/useCustomToast'
import { AuthState } from '@/interfaces/user'
import registerSchema from '@/schemas/registerSchema'
import { post } from '@/services/http'
import { parseAxiosError } from '@/utils/axios'
import {
  Box,
  Button,
  Heading,
  VStack,
  Link as ChakraLink,
  Text
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function RegisterPage() {
  const { replace } = useRouter()
  const { updateUser, authState } = useAuth()
  const { showToast } = useCustomToast()

  const { errors, getFieldProps, handleSubmit, isValid, isSubmitting } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      onSubmit: async (data) => {
        try {
          const { user, token, message } = await post({
            endpoint: REGISTER,
            data
          })

          localStorage.setItem(ACCESS_TOKEN, token)
          updateUser(user)
          showToast(message, 'success')
          replace(HOME)
        } catch (error) {
          showToast(parseAxiosError(error), 'error')
          console.log(error)
        }
      },
      validationSchema: registerSchema,
      validateOnMount: false,
      validateOnBlur: true,
      validateOnChange: true
    })

  useEffect(() => {
    if (authState === AuthState.AUTHENTICATED) replace(HOME)
  }, [authState, replace])

  if (authState === AuthState.AUTHENTICATING) return null
  return (
    <>
      <NextHead
        title="Register"
        description="Register to create a FinTrack account"
      />
      <Box
        mx="auto"
        p={10}
        mt={8}
        maxW="lg"
        rounded="md"
        shadow="md"
        border="1px solid #EEE"
      >
        <Heading size="md" mb={4}>
          Please register to create a&nbsp;
          <Box as="span" color="blue.600">
            FinTrack
          </Box>
          &nbsp;account
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={3}>
            <CustomInputGroup
              {...getFieldProps('name')}
              type="text"
              placeholder="e.g. John Doe"
              label="Name"
              error={errors.name}
            />
            <CustomInputGroup
              {...getFieldProps('email')}
              type="email"
              placeholder="e.g. johndoe@example.com"
              label="Email address"
              error={errors.email}
            />
            <CustomInputGroup
              {...getFieldProps('password')}
              type="password"
              placeholder="e.g. Strong password"
              label="Password"
              error={errors.password}
            />
            <CustomInputGroup
              {...getFieldProps('confirmPassword')}
              type="password"
              placeholder="e.g. Confirm password"
              label="Confirm Password"
              error={errors.confirmPassword}
            />
            <Button
              colorScheme="blue"
              w="full"
              type="submit"
              isDisabled={!isValid || isSubmitting}
              isLoading={isSubmitting}
            >
              Register
            </Button>
            <Text>
              Already have an account?&nbsp;
              <ChakraLink as={Link} color="blue.500" href={LOGIN}>
                Login
              </ChakraLink>
            </Text>
          </VStack>
        </form>
      </Box>
    </>
  )
}
