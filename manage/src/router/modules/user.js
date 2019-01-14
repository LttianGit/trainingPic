/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const usereRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/user',
  name: 'User',
  meta: {
    title: 'User',
    icon: 'table'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/user/user'),
      name: 'userlist',
      meta: { title: 'userlist' }
    }
  ]
}
export default usereRouter
