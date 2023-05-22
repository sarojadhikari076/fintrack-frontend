import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps
} from '@chakra-ui/react'
import React from 'react'

interface CustomInputGroupProps {
  label: string
  placeholder: string
  error?: string
}

function CustomInputGroup({
  label,
  placeholder,
  error,
  ...rest
}: CustomInputGroupProps & InputProps) {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb={1} fontSize="sm">
        {label}
      </FormLabel>
      <Input placeholder={placeholder} {...rest} />
      <FormErrorMessage mt={1}>{error}</FormErrorMessage>
    </FormControl>
  )
}

export default CustomInputGroup
