<template>
  <div class="solutions-container">
    <!-- Hero Section -->
    <div class="hero-section flex flex-col items-center justify-center text-center">
      <h1 class="text-4xl font-bold text-white mb-4">Medium length hero heading goes here</h1>
      <p class="text-white text-lg max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
    </div>

    <!-- Feature Section -->
    <div class="feature-section py-20 px-4 md:px-10 flex flex-col md:flex-row justify-center items-start bg-white text-black">
      <div class="max-w-4xl w-full flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
        <div class="feature-text w-full md:w-1/2">
          <h2 class="text-3xl font-bold mb-4">Long heading is what you see here in this feature section</h2>
        </div>
        <div class="feature-details w-full md:w-1/2">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Dark Section -->
    <div class="dark-section py-20 px-4 md:px-10 flex justify-center items-center bg-gray-800 text-white">
      <div class="max-w-4xl w-full text-center">
        <h3 class="text-2xl font-bold mb-4">Short heading here</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div class="image-container mx-auto">
          <img src="@/assets/sample-image.jpg" alt="Sample Image" class="mx-auto w-full md:w-1/2 object-cover">
        </div>
      </div>
    </div>

    <!-- Final Section -->
    <div class="final-section py-20 px-4 md:px-10 flex flex-col md:flex-row justify-center items-start bg-white text-black">
      <div class="max-w-4xl w-full flex flex-col md:flex-row items-start md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div class="final-text w-full md:w-1/2">
          <h3 class="text-sm font-semibold text-gray-500 mb-2">Tagline</h3>
          <h2 class="text-3xl font-bold mb-4">Medium length section heading goes here</h2>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div class="final-image w-full md:w-1/2 pt-10 md:pt-0">
          <div class="image-container bg-gray-200 w-full h-64 flex items-center justify-center">
            <img src="@/assets/sample-image.jpg" alt="Sample Image" class="cover-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionsPage',
};
</script>

<style scoped>
.solutions-container {
  width: 100%;
}

.hero-section {
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333; /* Dark background color */
  margin-top: 16vh; /* Adjust to match the height of your header */
  padding: 0 4vh;
  margin-right: 4vh;
  margin-left: 4vh;
}

.feature-section {
  background-color: #fff; /* White background color */
}

.feature-section h2 {
  font-size: 2rem; /* Adjust font size as needed */
}

.feature-section p {
  font-size: 1rem; /* Adjust font size as needed */
}

.dark-section {
  background-color: #333; /* Dark background color */
}

.dark-section h3 {
  font-size: 1.5rem; /* Adjust font size as needed */
}

.dark-section p {
  font-size: 1rem; /* Adjust font size as needed */
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.final-section {
  background-color: #fff; /* White background color */
}

.final-section h3 {
  font-size: 1rem; /* Adjust font size as needed */
}

.final-section h2 {
  font-size: 2rem; /* Adjust font size as needed */
}

.final-section p {
  font-size: 1rem; /* Adjust font size as needed */
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e7eb; /* Light gray background for the placeholder */
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* This ensures the image covers the entire container */
}
</style>
