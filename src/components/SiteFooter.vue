<template>
  <footer class="site-footer bg-white text-center py-4">
    <hr class="border-gray-300 w-3/5 mx-auto mb-4">
    <p class="text-gray-600 text-xs">&copy; {{ currentYear }} PT Intelegensia Mustaka Indonesia. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
.site-footer {
  background-color: #f9fafb;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
}

.site-footer hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.site-footer p {
  color: #4b5563;
  font-size: 0.75rem;
  margin: 0;
}
</style>
