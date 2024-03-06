import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleGoRouter = () => {
    navigate('/about')
  }
  return (
    <>
      <p>this is Home</p>
      <Button type="primary" onClick={handleGoRouter}>
        go About
      </Button>
    </>
  )
}

export default Home
