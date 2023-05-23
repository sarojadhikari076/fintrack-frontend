import { AxiosError } from 'axios'

interface CustomErrorResponse {
  message: string
}

export function parseAxiosError(error: unknown): string {
  const e = error as AxiosError
  if (e.response && e.response.data) {
    const data = e.response.data as CustomErrorResponse

    return data.message || 'An unknown error occurred'
  } else if (e.request) {
    return 'No response received from the server'
  }
  return e.message || 'An unknown error occurred'
}
