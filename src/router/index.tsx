import { createHashRouter, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from '@/components/Loading'

import Home from '@/pages/Home'
const About = lazy(() => import('@/pages/About'))
const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/404'))
const NoPermission = lazy(() => import('@/pages/403'))

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    )
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    )
  },
  {
    path: '/403',
    element: (
      <Suspense fallback={<Loading />}>
        <NoPermission />
      </Suspense>
    )
  }
])

export default router
