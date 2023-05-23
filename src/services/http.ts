import { ACCESS_TOKEN } from '@/constants/text'
import axios, { AxiosRequestConfig } from 'axios'

axios.interceptors.request.use((config) => {
  config.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
  const accessToken = localStorage.getItem(ACCESS_TOKEN)
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

interface GetRequestParams {
  endpoint: string
  config?: AxiosRequestConfig
}

interface PostRequestParams<T> {
  endpoint: string
  data: T
  config?: AxiosRequestConfig
}
interface DeleteRequestParams {
  endpoint: string
  config?: AxiosRequestConfig
}

export const get = async ({ endpoint, config }: GetRequestParams) => {
  const response = await axios.get(endpoint, config)
  return response.data
}

export const post = async <T>({
  endpoint,
  data,
  config
}: PostRequestParams<T>) => {
  const response = await axios.post(endpoint, data, config)
  return response.data
}

export const patch = async <T>({
  endpoint,
  data,
  config
}: PostRequestParams<T>) => {
  const response = await axios.patch(endpoint, data, config)
  return response.data
}

export const remove = async ({ endpoint, config }: DeleteRequestParams) => {
  const response = await axios.delete(endpoint, config)
  return response.data
}
