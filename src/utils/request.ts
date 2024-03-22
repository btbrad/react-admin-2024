import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

instance.interceptors.request.use(
  config => {
    console.log(config)
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return config
  },
  error => {
    console.log(error)
  }
)

instance.interceptors.response.use(
  response => {
    console.log('res', response)
    const { data } = response
    if (data.code !== 200) {
      console.log('报错')
      if (data.code === 401) {
        console.log('token过期')
      }
    }
    return Promise.resolve(data)
  },
  error => {
    let { message } = error
    if (message == 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    console.log('报错')
    return Promise.reject(error)
  }
)

export default instance
