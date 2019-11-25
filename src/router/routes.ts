import i18n from "../plugins/i18n";

const children: any[] = [
  {
    // path: '', redirect: 'home'
    // }, {
    // path: 'index', redirect: 'home'
    // }, {
    path: "home",
    // name: 'home',
    component: () => import(/* webpackChunkName: "home" */ "pages/Home.vue")
  },
  {
    path: "about",
    // name: 'about',
    component: () => import(/* webpackChunkName: "about" */ "pages/About.vue")
  }
];

const routes: any = [
  {
    path: "/",
    name: "first_enter",
    component: () =>
      import(/* webpackChunkName: "first_enter" */ "pages/FirstEnter.vue")
  },
  {
    path: "/ru",
    //   // alias: '/',
    component: () =>
      import(
        /* webpackChunkName: "lang_router_template" */ "components/LangTemplate.vue"
      ),
    beforeEnter(to: string, from: string, next: Function): Function {
      i18n.locale = "ru";
      return next();
    },
    children
  },
  {
    path: "/en",
    component: () =>
      import(
        /* webpackChunkName: "lang_router_template" */ "components/LangTemplate.vue"
      ),
    beforeEnter(to: any, from: any, next: Function): Function {
      if (!("en" in i18n.messages)) {
        import("locales/en.yaml").then((messages: any): void => {
          let res: any = {};
          for (let message in messages) {
            if (message !== "default") {
              res[message] = messages[message];
            }
          }
          i18n.setLocaleMessage("en", res);
        });
      }
      i18n.locale = "en";
      return next();
    },
    children
  },
  {
    path: "*",
    name: "error_404",
    component: () => import(/* webpackChunkName: "error_404" */ "pages/404.vue")
  }
];

export default routes;
