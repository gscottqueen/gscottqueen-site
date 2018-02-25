import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Portfolio from '@/components/Portfolio';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello-world',
      component: HelloWorld,
      meta: { title: 'Hello World' },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: { title: 'Portfolio' },
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
      meta: { title: 'Error' },
    },
  ],
  methods: {
    setTitle: function setTitle() {
      this.routes.beforeEach((to, from, next) => {
        document.title = to.meta.title;
        next();
      });
    },
  },
});
