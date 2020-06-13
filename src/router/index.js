import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@V/Home.vue';
import Sub1 from '@V/Sub1.vue';
import Sub2 from '@V/Sub2.vue';



Vue.use (VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/* webpackChunkName: "about" */ '@V/About.vue'),
    redirect:{name:'Sub1'},
    children:[
      {
        path:'/about/sub1',
        component:Sub1,
        name:'Sub1'
      },
      {
        path:'/about/sub2',
        component:Sub2,
        name:'Sub2'
      }
    ]
  },
];

const router = new VueRouter ({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log('toto',to);
  // console.log('fromfrom',from);
  // console.log('next',next);
  console.log('beforeEach');
  
next()
  
})
router.afterEach((to, from) => {
  console.log('afterEach');

  // console.log('toto',to);
  // console.log('fromfrom',from);
  
})

export default router;
