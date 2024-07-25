<template>
  <div class="customers-container bg-white">
    <!-- Hero Section -->
    <div class="hero-section flex flex-col items-center justify-center text-center h-screen px-4 md:px-0">
      <h1 class="text-2xl md:text-4xl font-bold mb-4">Medium length hero heading goes here</h1>
      <p class="text-base md:text-lg max-w-2xl mx-auto mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
    </div>

    <!-- Testimonials Section -->
    <div class="testimonials-section py-20 px-4 md:px-10 w-full bg-gray-100">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Testimonials</h2>
        <p class="text-base md:text-lg mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <!-- Testimonial 1 -->
        <div class="testimonial-item flex flex-col md:flex-row items-center mb-10">
          <div class="testimonial-image w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4 md:mb-0 md:mr-4">
            <img src="@/assets/sample-image.jpg" alt="Sample Image" class="rounded-full w-full h-full object-cover">
          </div>
          <div class="testimonial-content text-center md:text-left">
            <p class="font-bold">Name Surname</p>
            <p class="text-sm text-gray-500 mb-2">Position, Company name</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="testimonial-item flex flex-col md:flex-row-reverse items-center mb-10">
          <div class="testimonial-image w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4 md:mb-0 md:ml-4">
            <img src="@/assets/sample-image.jpg" alt="Sample Image" class="rounded-full w-full h-full object-cover">
          </div>
          <div class="testimonial-content text-center md:text-right">
            <p class="font-bold">Name Surname</p>
            <p class="text-sm text-gray-500 mb-2">Position, Company name</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="testimonial-item flex flex-col md:flex-row items-center mb-10">
          <div class="testimonial-image w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4 md:mb-0 md:mr-4">
            <img src="@/assets/sample-image.jpg" alt="Sample Image" class="rounded-full w-full h-full object-cover">
          </div>
          <div class="testimonial-content text-center md:text-left">
            <p class="font-bold">Name Surname</p>
            <p class="text-sm text-gray-500 mb-2">Position, Company name</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          </div>
        </div>

        <!-- Testimonial 4 -->
        <div class="testimonial-item flex flex-col md:flex-row-reverse items-center mb-10">
          <div class="testimonial-image w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4 md:mb-0 md:ml-4">
            <img src="@/assets/sample-image.jpg" alt="Sample Image" class="rounded-full w-full h-full object-cover">
          </div>
          <div class="testimonial-content text-center md:text-right">
            <p class="font-bold">Name Surname</p>
            <p class="text-sm text-gray-500 mb-2">Position, Company name</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomersPage',
};
</script>

<style scoped>
.customers-container {
  width: 100%;
}

.hero-section {
  background-color: #fff;
}

.testimonials-section {
  background-color: #f3f4f6; /* Light gray background */
}

.testimonial-item {
  align-items: center;
}

.testimonial-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.testimonial-content {
  max-width: 600px;
}
</style>
