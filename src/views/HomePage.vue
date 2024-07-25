<template>
  <div class="homepage flex flex-col-reverse lg:flex-row justify-center lg:px-10 space-y-4 lg:space-y-0 lg:space-x-4 mt-20">
    <!-- Left Card -->
    <div class="left-card w-full lg:w-1/5 p-4 bg-white shadow-md">
      <div class="image-container mb-4">
        <img src="@/assets/sample-image.jpg" alt="Sample Image" class="image w-full h-40 object-cover">
      </div>
      <div>
        <h3 class="text-sm font-semibold text-gray-500">Tagline</h3>
        <h2 class="text-xl font-bold mb-2">Medium length section heading goes here</h2>
        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    <!-- Right Card (Carousel) -->
    <div class="right-card w-full lg:w-4/5 p-4 bg-white shadow-md">
      <div class="swiper-container relative">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, index) in images" :key="index">
            <div class="image-container mb-4">
              <img :src="image" alt="Slide Image" class="image w-full h-40 object-cover">
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-500">Tagline</h3>
              <h2 class="text-xl font-bold mb-2">Medium length section heading goes here</h2>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
        <!-- Add Navigation -->
        <div class="swiper-button-next swiper-button-blue"></div>
        <div class="swiper-button-prev swiper-button-blue"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper';

export default {
  name: 'HomePage',
  data() {
    return {
      images: [
        require('@/assets/sample-image-1.jpg'),
        require('@/assets/sample-image-2.jpg'),
        require('@/assets/sample-image-3.jpg')
      ]
    };
  },
  mounted() {
    Swiper.use([Navigation]);
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,  // Enable infinite loop
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
</script>

<style scoped>
.homepage {
  padding-top: 4vh; /* Add some padding to ensure it starts below the header */
  height: auto;
}

.left-card,
.right-card {
  height: auto;
}

.image-container {
  width: 100%;
  height: 50vh; /* Adjust this height as needed */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container */
}

@media (min-width: 1024px) {
  .homepage {
    flex-direction: row;
    padding-right: 14vh;
    padding-left: 14vh;
    height: calc(100vh - 8vh); /* Ensure the homepage takes the appropriate height */
  }

  .left-card,
  .right-card {
    height: 90%;
  }
}

@media (max-width: 1023px) {
  .homepage {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
