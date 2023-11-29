const paths = [
  {
    path: '',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  }
]
export default paths