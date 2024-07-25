<template>
  <div id="app" class="bg-white min-h-screen font-serif">
    <SiteHeader />
    <main class="mt-20">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>
