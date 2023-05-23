import { useToast } from '@chakra-ui/react'

type IStatus = 'info' | 'warning' | 'success' | 'error' | undefined

export default function useCustomToast() {
  const toast = useToast()

  const showToast = (title: string, status: IStatus, description?: string) => {
    toast({
      title,
      status,
      isClosable: true,
      position: 'bottom-left',
      description
    })
  }

  return { showToast }
}
