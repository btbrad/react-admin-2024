import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

export default instance
