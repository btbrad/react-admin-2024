import { request } from '@/utils'
import type { AxiosPromise } from 'axios'

interface LoginData {
  username: string
  password: string
}

interface LoginResult {
  token: string
}

export const login = (data: LoginData): AxiosPromise<LoginResult> => {
  return request({
    method: 'post',
    url: '/auth/login',
    data
  })
}
