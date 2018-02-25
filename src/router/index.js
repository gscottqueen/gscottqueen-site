import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Projects from '@/components/Projects';
import NotFound from '@/components/NotFound';
import Nested from '@/components/Nested';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: HelloWorld,
      name: 'hello-world',
      meta: { title: 'Hello World' },
    },
    {
      path: '/projects',
      component: Projects,
      meta: {
        title: 'Projects',
        metaTags: [
          {
            name: 'projects',
            content: 'Projects, inprogress and completed.',
          },
          {
            property: 'og:description',
            content: 'Projects, inprogress and completed.',
          },
        ],
      },
      children: [
        {
          path: '/projects/nested',
          component: Nested,
          meta: {
            title: 'Nested',
            metaTags: [
              {
                name: 'nested',
                content: 'NKOTB',
              },
              {
                property: 'og:description',
                content: 'NKOTB',
              },
            ],
          },
        },
      ],
    },
    {
      path: '/*/',
      component: NotFound,
      meta: {
        title: 'Error',
        metaTags: [
          {
            name: 'not-found',
            content: 'You have reached this page by error.',
          },
          {
            property: 'og:description',
            content: 'You have reached this page by error.',
          },
        ],
      },
    },
  ],
});
