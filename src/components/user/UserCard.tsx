import { useAuth } from '@/hooks/useAuth'
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function UserCard() {
  const { user } = useAuth()
  return (
    <Box py={5} px={8} mb={10} rounded="md" shadow="md">
      <Heading size="sm">
        Welcome,&nbsp;
        <Box as="span" color="blue.600">
          {user?.name}
        </Box>
      </Heading>
      <Text color="gray.400" fontSize="sm">
        {user?.email}
      </Text>
    </Box>
  )
}

export default UserCard
