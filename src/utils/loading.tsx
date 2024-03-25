import ReactDOM from 'react-dom/client'
import { Spin } from 'antd'

let count = 0

const showLoading = () => {
  if (count === 0) {
    const div = document.createElement('div')
    div.setAttribute('id', 'loading')
    document.body.append(div)
    ReactDOM.createRoot(div).render(<Spin size='large' fullscreen tip='加载中...' />)
  }
  count++
}

const hideLoading = () => {
  if (count < 0) {
    return
  }
  count--
  if (count === 0) {
    document.body.removeChild(document.querySelector('#loading')!)
  }
}

export { showLoading, hideLoading }
