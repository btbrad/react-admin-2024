import { createHashRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from '@/components/Loading'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
])

export default router
