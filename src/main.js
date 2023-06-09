import Vue from 'vue'
import App from './App.vue'
// import {Row, Button} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Row)
// Vue.use(Button)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
