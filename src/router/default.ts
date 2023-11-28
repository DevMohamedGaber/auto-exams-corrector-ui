const paths = [
  {
    path: '',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Home-[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Login.vue'),
  },
]
export default paths