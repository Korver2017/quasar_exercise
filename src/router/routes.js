
const routes = [
  {
    path: '/',
    component: () => import ('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import ('pages/Index.vue') },
      { path: 'dark-table', component: () => import ('components/DarkTable.vue') },
      { path: 'visible-columns-table', component: () => import ('components/VisibleColumnsTable.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import ('pages/Error404.vue')
  }
]

export default routes
