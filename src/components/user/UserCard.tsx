import { useAuth } from '@/hooks/useAuth'
import { Box, HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ExportReport from '../finance/ExportReport'

function UserCard() {
  const { user } = useAuth()
  return (
    <HStack py={5} px={8} mb={10} rounded="md" shadow="md">
      <Box mr="auto">
        <Heading size="md">
          Welcome,&nbsp;
          <Box as="span" color="blue.600">
            {user?.name}
          </Box>
        </Heading>
        <Text color="gray.400" fontSize="sm">
          {user?.email}
        </Text>
      </Box>
      <ExportReport />
    </HStack>
  )
}

export default UserCard
