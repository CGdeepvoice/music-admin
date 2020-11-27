const router = {
  routes: [
    {
      path: '/',
      component: (resolve) => require(["../pages/Login.vue"], resolve)
    }
  ]
};
export default router
