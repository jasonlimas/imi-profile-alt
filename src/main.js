import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'swiper/swiper-bundle.css';
import './assets/tailwind.css';
import i18n from './i18n';
import 'flag-icons/css/flag-icons.min.css';

Vue.config.productionTip = false;

new Vue({
  router, i18n, // Use the router
  render: h => h(App),
}).$mount('#app');
