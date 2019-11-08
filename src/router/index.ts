import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: process.env.githubio === 'true' ? 'hash': 'history',
  base: '/',
  scrollBehavior (to: any, from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      // , offset: { x: 0, y: 10 }
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
