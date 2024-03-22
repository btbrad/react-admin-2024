import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { login } from '@/api/auth'

const Home = () => {
  const navigate = useNavigate()

  const handleGoRouter = () => {
    navigate('/about')
  }

  const handleLogin = () => {
    login()
  }

  return (
    <>
      <p>this is Home</p>
      <Button type='primary' onClick={handleGoRouter}>
        go About
      </Button>
      <Button onClick={handleLogin}>登录</Button>
    </>
  )
}

export default Home
