// import i18n from "middleware/i18n";

// const children = [
  // {
//       path: '',
//       alias: ['/', '/home', 'home'],
//       // name: 'home',
//       component: () => import(/* webpackChunkName: "home" */ "./pages/Home.vue")
//   }, {
//       path: 'about',
//       alias: '/about',
//       // name: 'about',
//       component: () => import(/* webpackChunkName: "about" */ "./pages/About.vue")
//   }
// ]

const routes: any = [
  {
    path: '/test',
    component: () => import(/* webpackChunkName: "test" */ "pages/test.vue")
  }
  // {
    // path: '/',
    // component: () => import(/* webpackChunkName: "first_enter" */ "./pages/FirstEnter.vue"),
  // }, {
  //   path: '/ru',
  //   // alias: '/',
  //   component: () => import(/* webpackChunkName: "router_template" */ "./components/LangRoutes.vue"),
  //   beforeEnter(to, from, next) {
  //     i18n.locale = 'ru';
  //     return next();
  //   },
  //   children
  // }, {
  //   path: "/en",
  //   component: () => import(/* webpackChunkName: "router_template" */ "./components/LangRoutes.vue"),
  //   beforeEnter(to, from, next) {
  //     if (Object.keys(i18n.messages).indexOf('en') < 0) {
  //       import('locales/en').then(messages => {
  //         i18n.setLocaleMessage('en', messages)
  //       });
  //     }
  //     i18n.locale = 'en';
  //     return next();
  //   },
  //   children
  // }, {
  //   path: '*',
  //   name: 'error_404',
  //   component: () => import(/* webpackChunkName: "error_404" */ "./pages/404.vue"),
  // }
]

export default routes
