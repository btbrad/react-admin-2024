import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { login } from '@/api/auth'
import { formatMoney } from '@/utils'
import { storage } from '@/utils'

const Home = () => {
  const navigate = useNavigate()

  const handleGoRouter = () => {
    navigate('/about')
  }

  const handleLogin = () => {
    login({
      username: '',
      password: ''
    })
  }

  return (
    <>
      <p>this is Home</p>
      <Button type='primary' onClick={handleGoRouter}>
        go About
      </Button>
      <Button onClick={handleLogin}>登录</Button>
      <p>{formatMoney(199999999)}</p>
      <Button onClick={() => storage.set('aaa', { user: 'BT' })}>set storage</Button>
      <Button onClick={() => alert(storage.get('aaa').user)}>get storage</Button>
      <Button onClick={() => storage.remove('aaa')}>remove storage</Button>
      <Button onClick={() => storage.clear()}>clear storage</Button>
    </>
  )
}

export default Home
