import CustomInputGroup from '@/components/common/CustomInputGroup'
import NextHead from '@/components/common/NextHead'
import { HOME, LOGIN, REGISTER } from '@/constants/routes'
import { ACCESS_TOKEN } from '@/constants/text'
import { useAuth } from '@/hooks/useAuth'
import useCustomToast from '@/hooks/useCustomToast'
import { AuthState } from '@/interfaces/user'
import loginSchema from '@/schemas/loginSchema'
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

export default function LoginPage() {
  const { replace } = useRouter()
  const { updateUser, authState } = useAuth()
  const { showToast } = useCustomToast()

  const { errors, getFieldProps, handleSubmit, isValid, isSubmitting } =
    useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: async (data) => {
        try {
          const { user, token, message } = await post({
            endpoint: LOGIN,
            data
          })

          localStorage.setItem(ACCESS_TOKEN, token)
          updateUser(user)
          showToast(message, 'success')
        } catch (error) {
          showToast(parseAxiosError(error), 'error')
          console.log(error)
        }
      },
      validationSchema: loginSchema,
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
      <NextHead title="Login" description="Login to proceed with FinTrack" />
      <Box
        mx="auto"
        p={10}
        mt={32}
        maxW="md"
        rounded="md"
        shadow="md"
        border="1px solid #EEE"
      >
        <Heading size="md" mb={4}>
          Please login to proceed with&nbsp;
          <Box as="span" color="blue.600">
            FinTrack
          </Box>
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={3}>
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
            <Button
              colorScheme="blue"
              w="full"
              type="submit"
              isDisabled={!isValid || isSubmitting}
              isLoading={isSubmitting}
            >
              Login
            </Button>
            <Text>
              Don&quot;t have an account?&nbsp;
              <ChakraLink as={Link} color="blue.500" href={REGISTER}>
                Register
              </ChakraLink>
            </Text>
          </VStack>
        </form>
      </Box>
    </>
  )
}
