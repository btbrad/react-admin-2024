import { Form, Input, Button, type FormProps } from 'antd'
import { login } from '@/api/auth'
import { useNavigate, Navigate } from 'react-router-dom'

type FieldType = {
  username: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>['onFinish'] = async values => {
    console.log('Success:', values)
    await login(values)
    navigate('/')
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='w-screen h-screen bg-gray-300 flex justify-center items-center'>
      <div className='w-[500px] h-[300px] bg-white px-10 py-10'>
        <div className='w-full text-center font-bold text-xl mb-5'>登录</div>
        <Form
          name='basic'
          labelCol={{ span: 6 }}
          labelAlign='left'
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<FieldType> label='用户名' name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label='密码' name='password' rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button className='w-full' type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
