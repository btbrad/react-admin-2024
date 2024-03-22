import { request } from '@/utils'

console.log(request)
export const login = (data: any) => {
  return request({
    method: 'post',
    url: '/auth/login',
    data
  })
}
