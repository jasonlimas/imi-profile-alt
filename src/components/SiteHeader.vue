<template>
  <header class="site-header bg-white fixed top-0 w-full shadow-md z-10">
    <div class="container mx-auto flex justify-between items-center py-2 px-4">
      <div class="flex-1">
        <img src="@/assets/logo.png" class="logo h-12 cursor-pointer" alt="Company Logo" @click="goToHomePage">
      </div>
      <nav class="hidden md:flex justify-center flex-1 text-center">
        <ul class="inline-flex space-x-6">
          <li><a href="/solutions" class="text-gray-700 hover:text-gray-900">Solutions</a></li>
          <li><a href="/customers" class="text-gray-700 hover:text-gray-900">Customers</a></li>
          <li><a href="/support" class="text-gray-700 hover:text-gray-900">Support</a></li>
          <li><a href="/contact-us" class="text-gray-700 hover:text-gray-900">Contact Us</a></li>
        </ul>
      </nav>
      <div class="flex-1 text-right md:hidden">
        <button @click="toggleMenu" class="hamburger-button">
          <svg v-if="!menuOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-if="menuOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    <transition name="slide">
      <div v-if="menuOpen" class="mobile-menu fixed inset-0 bg-white flex flex-col items-center justify-center z-20">
        <img src="@/assets/logo.png" class="logo h-12 mb-8" alt="Company Logo">
        <button @click="toggleMenu" class="absolute top-4 right-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul class="flex flex-col items-center space-y-6 py-6">
          <li><a href="/solutions" class="text-gray-700 hover:text-gray-900 text-xl" @click="toggleMenu">Solutions</a></li>
          <li><a href="/customers" class="text-gray-700 hover:text-gray-900 text-xl" @click="toggleMenu">Customers</a></li>
          <li><a href="/support" class="text-gray-700 hover:text-gray-900 text-xl" @click="toggleMenu">Support</a></li>
          <li><a href="/contact-us" class="text-gray-700 hover:text-gray-900 text-xl" @click="toggleMenu">Contact Us</a></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    goToHomePage() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.logo {
  cursor: pointer;
}

.hamburger-button {
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu {
  background-color: white;
  height: 100vh;
  transition: transform 0.3s ease;
}

.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: transform 0.3s ease;
}

.mobile-menu-enter, .mobile-menu-leave-to {
  transform: translateX(100%);
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

@media (min-width: 768px) {
  .container {
    display: flex;
    justify-content: center;
  }
  .container > .flex-1:first-child {
    flex: 0 1 auto;
  }
  .container > .flex-1:last-child {
    flex: 0 1 auto;
  }
}
</style>
