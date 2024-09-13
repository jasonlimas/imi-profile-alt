<template>
<div class="contact-us-container">
    <!-- Left Section: Content and Timeline -->
    <div class="left-section flex flex-col justify-between h-full p-4 md:p-10">
        <div>
            <h1 class="text-3xl font-bold mb-4">Hubungi Kami</h1>
            <p class="text-md mb-10 text-justify">
                Hubungi kami untuk informasi mengenai apa saja yang bisa kami lakukan untuk Bapak-Ibu, komunikasi dan pelayanan yang baik adalah hal utama yang menjadi dasar sikap kami sehari-hari.
            </p>
        </div>

        <!-- Image container with flex-grow class to push it to the bottom -->
        <div class="flex items-center justify-center">
            <img src="@/assets/contact-1.png" alt="contact" class="max-w-full h-auto m-2 shadow-lg">
        </div>
    </div>


    <!-- Right Section: Contact Form -->
    <div class="right-section">
    <div class="form-container">
        <h2 class="text-3xl font-bold mb-4">Form</h2>
        <p class="text-lg mb-6">Silahkan isi form berikut</p>
        <form @submit.prevent="submitForm" class="space-y-6">
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
            <input type="text" id="name" v-model="form.name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-input" required>
        </div>
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" v-model="form.email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-input" required>
        </div>
        <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Pesan</label>
            <textarea id="message" v-model="form.message" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-input" rows="5" required></textarea>
        </div>
        <div>
            <button type="submit" class="w-full py-2 bg-[#3498db] text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Kirim</button>
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
  padding: 1rem;
}

@media (min-width: 1024px) {
  .contact-us-container {
    flex-direction: row;
    align-items: flex-start; /* Ensures alignment starts from the top */
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

/* Timeline section */
.timeline {
  position: relative;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.timeline-background {
  background-image: url('@/assets/contact-1.png');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* No opacity here */
}

.timeline-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.timeline-item {
  text-align: center;
  margin-bottom: 1.5rem; /* Reduced margin */
  position: relative;
  z-index: 3;
  padding: 0.5rem 1rem; /* Reduce padding to compress content */
  background-color: rgba(0, 0, 0, 0.6); /* Add a semi-transparent background behind the text */
  border-radius: 8px;
  width: 50%; /* Adjust the width of the timeline item */
}

.timeline-separator {
  width: 2px;
  background-color: white; /* Vertical line */
  height: 30px; /* Reduce the height of the separator */
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Black overlay to darken the background */
  z-index: 2;
  border-radius: 10px;
}

.left-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.right-section {
  display: flex;
  align-items: flex-start; /* Aligns form to the top */
}

.form-container {
  width: 100%;
  max-width: 600px;
  margin-top: 0; /* Remove extra margin to align with left */
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-input {
  padding: 0.75rem 1rem;
  border: 2px solid #d1d5db;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.custom-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.custom-input::placeholder {
  color: #9ca3af;
}
</style>
