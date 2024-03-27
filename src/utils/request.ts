import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { showLoading, hideLoading, storage } from '@/utils'
import { message } from 'antd'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    showLoading()
    const token = storage.get('token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    message.error(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    hideLoading()
    const { code, msg } = response.data
    if (code === 200) {
      return response.data
    }
    message.error(msg || '系统出错')
    return Promise.reject(new Error(msg || 'Error'))
  },
  error => {
    hideLoading()
    if (error.response.status === 401) {
      // todo 登录过期
    }
    message.error(error.response.data.message)
    return Promise.reject(error.message)
  }
)

export default instance
