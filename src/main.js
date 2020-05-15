import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

import './test.css';
import './test22.scss';

Vue.config.productionTip = false;
// Vue.use (ViewUI);

import {Button, Table} from 'view-design';
Vue.component ('Button', Button);

new Vue ({
  router,
  store,
  render: h => h (App),
}).$mount ('#app');
