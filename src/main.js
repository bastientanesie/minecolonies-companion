import Vue from 'vue';
import App from './App.vue';
import store from './store';
import focus from './directives/focus';

// Register a global custom directive called `v-focus`
Vue.directive('focus', focus);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
