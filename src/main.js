import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css'; // 组件样式文件
// import { Form, Icon ,FormItem,Input,Table,Dropdown,DropdownMenu,DropdownItem,Button} from 'iview'; // 引入自己用到的组件
import ViewUI from 'iview'; // 引入自己用到的组件

console.log(ViewUI,'ttt');

// Vue.component('Form', Form);  
// Vue.component('Icon', Icon);
// Vue.component('FormItem', FormItem);
// Vue.component('Input', Input);
// Vue.component('DropdownMenu', DropdownMenu);
// Vue.component('Table', Table);
// Vue.component('DropdownItem', DropdownItem);
// Vue.component('Dropdown', Dropdown);

// Vue.component('Button', Button);

Vue.use(ViewUI);


// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

import './test.css';
import './test22.scss';

Vue.config.productionTip = false;
// Vue.use (ViewUI);

// import {Button, Table} from 'view-design';
// Vue.component ('Button', Button);

new Vue ({
  data:()=>({
    attr:'我是根组件'
  }),
  router,
  store,
  render: h => h (App),
}).$mount ('#app');
