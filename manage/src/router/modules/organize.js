/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const orginizeRouter = {
  path: '/orginize',
  component: Layout,
  redirect: '/orginize/coding',
  name: 'Orginize',
  meta: {
    title: 'orginize',
    icon: 'peoples'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/organize/index'),
      name: 'Index',
      meta: { title: 'Index' }
    },{
      path: 'Charts',
      component: () => import('@/views/organize/charts'),
      name: 'Charts',
      meta: { title: 'Charts',roles:['coding'] }
    },{
        path: 'PutInExcel',
        component: () => import('@/views/organize/putInExcel'),
        name: 'PutInExcel',
        meta: { title: 'PutInExcel' ,roles:['commit']}
      },{
        path: 'prd',
        component: () => import('@/views/organize/index'),
        name: 'Prd',
        meta: { title: 'Prd' ,roles:['prd']}
      },{
        path: 'demand',
        component: () => import('@/views/organize/index'),
        name: 'Demand',
        meta: { title: 'Demand' ,roles:['demand']}
      },{
        path: 'activity',
        component: () => import('@/views/organize/index'),
        name: 'Activity',
        meta: { title: 'Activity',roles:['activity'] }
      },{
        path: 'ui',
        component: () => import('@/views/organize/index'),
        name: 'UI',
        meta: { title: 'UI',roles:['UI'] }
      }
  ]
}
export default orginizeRouter
