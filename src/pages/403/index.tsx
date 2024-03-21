import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NoPermission = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <Result
      status='403'
      title='403'
      subTitle='您无权访问此页面。'
      extra={
        <Button type='primary' onClick={handleBack}>
          回到首页
        </Button>
      }
    />
  )
}

export default NoPermission
