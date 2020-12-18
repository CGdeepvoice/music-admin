
const router = {
  routes: [
    {
      path: '/Home',
      component: (resolve) => require(["../components/Home.vue"], resolve),
      meta: { title: "自述文件" },
      children: [
        {
          path: '/Info',
          component: (resolve) => require(["../pages/InfoPage.vue"], resolve),
          meta: { title: "Info" }
        }
      ]
    },
    {
      path: '/',
      component: (resolve) => require(["../pages/Login.vue"], resolve)
    }
  ]
};
export default router
