<template>
  <div id="app" class="min-h-screen bg-[#F5F5F5] font-serif">
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
