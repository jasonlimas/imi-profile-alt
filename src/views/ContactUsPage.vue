<template>
  <div class="contact-us-container">
    <!-- Left Section: Content and Timeline -->
    <div class="left-section">
      <h2 class="text-2xl font-bold mb-4">Tagline</h2>
      <h1 class="text-4xl font-bold mb-4">Medium length section heading goes here</h1>
      <p class="text-lg mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div class="timeline">
        <div class="timeline-item text-center">
          <h3 class="font-bold">Date</h3>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div class="timeline-separator"></div>
        <div class="timeline-item text-center">
          <h3 class="font-bold">Date</h3>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div class="timeline-separator"></div>
        <div class="timeline-item text-center">
          <h3 class="font-bold">Date</h3>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
      </div>
    </div>

    <!-- Right Section: Contact Form -->
    <div class="right-section">
      <div class="form-container">
        <h2 class="text-3xl font-bold mb-4">Contact us</h2>
        <p class="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" v-model="form.name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-input" required>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" v-model="form.email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-input" required>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" v-model="form.message" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-input" rows="4" required></textarea>
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="terms" type="checkbox" v-model="form.terms" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
            </div>
            <div class="ml-3 text-sm">
              <label for="terms" class="font-medium text-gray-700">I accept the <a href="#" class="text-blue-500 underline">Terms</a></label>
            </div>
          </div>
          <div>
            <button type="submit" class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        terms: false,
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form);
    },
  },
};
</script>

<style scoped>
.contact-us-container {
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
  background-color: #fff;
  padding: 1rem;
}

@media (min-width: 1024px) {
  .contact-us-container {
    flex-direction: row;
    padding: 0 14vh;
  }
}

.left-section, .right-section {
  width: 100%;
  padding: 1.5rem;
}

@media (min-width: 1024px) {
  .left-section, .right-section {
    width: 50%;
    padding: 2.5rem;
  }
}

.right-section {
  display: flex;
  align-items: center;
}

.form-container {
  width: 100%;
  max-width: 600px;
  margin: auto;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timeline {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 2rem;
}

.timeline-item {
  flex: 1;
  text-align: center;
  position: relative;
}

.timeline-separator {
  flex: 1;
  height: 2px;
  background-color: #000;
  position: relative;
}

.custom-input {
  padding: 0.75rem 1rem; /* Custom padding */
  border: 2px solid #d1d5db; /* Custom border */
  transition: border-color 0.2s, box-shadow 0.2s; /* Smooth transition */
}

.custom-input:focus {
  border-color: #3b82f6; /* Focus border color */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3); /* Focus box shadow */
}

.custom-input::placeholder {
  color: #9ca3af; /* Placeholder color */
}
</style>
