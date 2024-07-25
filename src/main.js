import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'swiper/swiper-bundle.css'; 
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router, // Use the router
  render: h => h(App),
}).$mount('#app');