import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import SolutionsPage from '@/views/SolutionsPage.vue';
import CustomersPage from '@/views/CustomersPage.vue';
import ContactUsPage from '@/views/ContactUsPage.vue'; // Import the ContactUsPage component

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: SolutionsPage,
    },
    {
      path: '/customers',
      name: 'Customers',
      component: CustomersPage,
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUsPage, // Add the route for ContactUsPage
    },
    // Add other routes here
  ],
});
