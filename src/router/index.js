import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/04-pages/HelloWorld';
import Projects from '@/components/04-pages/Projects';
import ProjectCards from '@/components/03-organisims/ProjectCards';
import NotFound from '@/components/04-pages/NotFound';
import CaseStudy from '@/components/04-pages/CaseStudy';

Vue.use(Router);

const routes = [
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
          content: 'Projects, in progress and completed.',
        },
        {
          property: 'og:description',
          content: 'Projects, in progress and completed.',
        },
      ],
    },
  },
  {
    path: '/case-study',
    component: CaseStudy,
    meta: {
      title: 'Case Study',
      metaTags: [
        {
          name: 'case-study',
          content: 'NKOTB',
        },
        {
          property: 'og:description',
          content: 'NKOTB',
        },
      ],
    },
    children: [
      {
        path: '/case-study/study-1',
        component: ProjectCards,
        meta: {
          title: 'Study 1',
          metaTags: [
            {
              name: 'case-study-1',
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
];

const router = new Router({
  routes,
  mode: 'history',
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // matched routes from last to first, finding the closest route with a title.
  // eg. /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();
  // TODO: get this written with ES6 compliance
  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  }).forEach(tag => document.head.appendChild(tag));// Add the meta tags to the document head.
  return next();
}); // https://alligator.io/vuejs/vue-router-modify-head/

export default new Router({
  routes,
  mode: 'history',
});

new Vue({
  router,
  template: '',
}).$mount('#app');
