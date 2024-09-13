<template>
  <header class="site-header fixed top-0 w-full shadow-md z-10">
    <div class="container mx-auto flex justify-between items-center py-2 px-4">
      <div class="flex-1">
        <img src="@/assets/logo.png" class="logo h-12 cursor-pointer" alt="Company Logo" @click="goToHomePage">
      </div>
      <nav class="hidden md:flex justify-center flex-1">
        <ul class="inline-flex space-x-6 text-lg">
          <li><a href="/solutions" class="text-white hover:text-[#D3D3D3]">Solutions</a></li>
          <li><a href="/customers" class="text-white hover:text-[#D3D3D3]">Customers</a></li>
          <li><a href="/support" class="text-white hover:text-[#D3D3D3]">Support</a></li>
          <li><a href="/contact-us" class="text-white hover:text-[#D3D3D3]">Contact Us</a></li>
        </ul>
      </nav>
      <div class="language-toggle">
    <button class="lang-btn" @click="toggleLanguage">
      <span :class="currentLang === 'en' ? 'fi fi-gb' : 'fi fi-id'"></span>
    </button>
  </div>
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
        <img src="@/assets/logo.png" class="logo h-16 mb-8" alt="Company Logo">
        <button @click="toggleMenu" class="absolute top-4 right-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul class="flex flex-col items-center space-y-6 py-6">
          <li><a href="/solutions" class="text-white hover:text-[#D3D3D3] text-xl" @click="toggleMenu">Solutions</a></li>
          <li><a href="/customers" class="text-white hover:text-[#D3D3D3] text-xl" @click="toggleMenu">Customers</a></li>
          <li><a href="/support" class="text-white hover:text-[#D3D3D3] text-xl" @click="toggleMenu">Support</a></li>
          <li><a href="/contact-us" class="text-white hover:text-[#D3D3D3] text-xl" @click="toggleMenu">Contact Us</a></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
    name: 'LanguageSwitcher',
  data() {
    return {
      menuOpen: false,
      currentLang: this.$i18n.locale,
    };
  },
  methods: {
    toggleLanguage() {
      // Toggle language between English and Indonesian
      this.currentLang = this.currentLang === 'en' ? 'id' : 'en';
      this.$i18n.locale = this.currentLang; // Update i18n language
    },
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
  background-color: #1F3B4D;
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
  color: white;
}

.mobile-menu {
  background-color: #1F3B4D;
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

.language-toggle {
  display: flex;
  justify-content: center; /* Horizontally centers the button */
  align-items: center; /* Vertically centers the button */
}

.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  border: none;
  padding: 0; /* Ensure no padding */
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 48px; /* Set a fixed width */
  height: 32px; /* Set a fixed height */
}

.lang-btn:hover {
  background-color: #2980b9;
}

.flag-icon {
  width: 24px;
  height: 16px; /* Adjust the size of the flag */
  display: block; /* Ensures the flag is treated as a block-level element */
  background-size: contain; /* Ensures the flag image fits the container */

}

.fi {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0; /* Ensure no margin */
  padding: 0; /* Ensure no padding */
  font-size: 20px;
  border-radius: 5px;
}
</style>
