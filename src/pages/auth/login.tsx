import CustomInputGroup from '@/components/common/CustomInputGroup'
import NextHead from '@/components/common/NextHead'
import { HOME } from '@/constants/routes'
import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

function LoginPage() {
  const { replace } = useRouter()
  return (
    <>
      <NextHead title="Login" description="Login to proceed with FinTrack" />
      <Box
        mx="auto"
        p={10}
        mt={40}
        maxW="md"
        rounded="md"
        shadow="md"
        border="1px solid #EEE"
      >
        <Heading size="md" color="blue.600" mb={4}>
          Please login to proceed with FinTrack
        </Heading>

        <form>
          <VStack spacing={3}>
            <CustomInputGroup
              type="email"
              placeholder="e.g. johndoe@example.com"
              label="Email address"
              error="Please enter a valid email"
            />
            <CustomInputGroup
              placeholder="e.g. Strong password"
              label="Password"
              error="Please enter a password"
            />
            <Button colorScheme="blue" w="full" onClick={() => replace(HOME)}>
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  )
}

export default LoginPage
