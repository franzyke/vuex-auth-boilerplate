export default [
  {
    path: '/',
    name: 'home',
    component: require('@/components/Home.vue')
  },
  {
    path: '/login/:name?/:params?',
    name: 'login',
    component: require('@/components/Login.vue')
  },
  {
    path: '/admin',
    component: require('@/components/Layouts/AdminLayout.vue'),
    meta: {requiresAuth: true},
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: require('@/components/Admin/Dashboard.vue'),
        meta: {requiresAuth: true}
      }
    ]
  }
]
/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
**/
// const v = (name) => {
//   var res = require(name)
//   return res
// }
