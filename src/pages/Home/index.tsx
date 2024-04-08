import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { formatMoney } from '@/utils'
import { storage } from '@/utils'

const Home = () => {
  const navigate = useNavigate()

  const handleGoRouter = () => {
    navigate('/about')
  }

  return (
    <>
      <p>this is Home</p>
      <Button type='primary' onClick={handleGoRouter}>
        go About
      </Button>
      <p>{formatMoney(199999999)}</p>
      <Button onClick={() => storage.set('aaa', { user: 'BT' })}>set storage</Button>
      <Button onClick={() => alert(storage.get('aaa').user)}>get storage</Button>
      <Button onClick={() => storage.remove('aaa')}>remove storage</Button>
      <Button onClick={() => storage.clear()}>clear storage</Button>
    </>
  )
}

export default Home
