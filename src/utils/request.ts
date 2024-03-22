import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data
    if (code === 200) {
      return response.data
    }
    console.log(msg || '系统出错')
    return Promise.reject(new Error(msg || 'Error'))
  },
  error => {
    if (error.response.status === 401) {
      // todo 登录过期
      // ElMessageBox.confirm('登录状态过期，请重新登录', '提示', {
      //   confirmButtonText: '确定',
      //   showCancelButton: false,
      //   type: 'warning'
      // }).then(() => {
      //   removeAll()
      //   router.push('/login')
      // })
    }
    return Promise.reject(error.message)
  }
)

export default instance
