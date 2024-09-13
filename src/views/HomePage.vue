<template>
    <div>
      <!-- Title at the top -->
      <div class="page-title">
        <h2>PT Intelegensia Mustaka Indonesia</h2>
      </div>

      <!-- Two Columns Layout -->
      <div class="content-container">
        <!-- Left Column: Static Card -->
        <div class="static-card">
          <div class="image-container">
            <img src="@/assets/event-1.png" alt="Static Card Image" class="static-image">
          </div>
          <div class="text-section">
            <h2 class="card-title">{{ $t('eventTitle') }}</h2>
            <p class="card-description">{{ $t('eventText') }}</p>
          </div>
        </div>

        <!-- Right Column: Carousel Section -->
        <div class="carousel-card">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
                <!-- Image and Text for Each Slide -->
                <div class="image-container">
                  <img :src="slide.image" alt="Carousel Image" class="carousel-image">
                </div>
                <div class="text-section">
                  <h2 class="card-title">{{ slide.title }}</h2>
                  <p class="card-description">{{ $t(slide.description) }}</p>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import Swiper from 'swiper/bundle';
  import 'swiper/swiper-bundle.css'; // Import Swiper styles

  export default {
    name: 'HomePage',
    data() {
      return {
        slides: [
          {
            image: require('@/assets/carousel-1.png'),
            title: '2 to 33',
            description: 'carousel1',
          },
          {
            image: require('@/assets/carousel-2.png'),
            title: 'Young',
            description: 'carousel2',
          },
          {
            image: require('@/assets/carousel-3.png'),
            title: 'Support',
            description: 'carousel3',
          }
        ]
      };
    },
    mounted() {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
      });
    }
  };
  </script>

  <style scoped>
  /* Page Title */
  .page-title {
    text-align: center;
    padding-top: 1rem;
    margin-bottom: 2rem;
  }

  .page-title h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  /* Flexbox Layout for Two Columns */
  .content-container {
    display: flex;
    justify-content: space-between;
    gap: 2rem; /* Space between the two columns */
    padding: 0 2rem;
    max-width: 1200px;
    margin: 0 auto; /* Center the content on larger screens */
    flex-wrap: wrap; /* Ensure it wraps on smaller screens */
  }

  /* Card Container */
  .carousel-card,
  .static-card {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%; /* Set width to full for mobile */
  }

  .static-card {
    background-color: #f8f9fa; /* Light grey background for distinction */
    flex: 1 1 45%; /* Take about 45% of the width on larger screens */
  }

  .carousel-card {
    flex: 1 1 55%; /* Take about 55% of the width on larger screens */
  }

  /* Image and Carousel */
  .carousel-image,
  .static-image {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10; /* Maintain 16:10 ratio */
    object-fit: contain; /* Prevent cropping */
  }

  .swiper-container {
    width: 100%;
    overflow: hidden;
  }

  .swiper-pagination {
    bottom: 15px; /* Add more space at the bottom */
  }

  .swiper-pagination-bullet {
    background-color: #3498db;
    opacity: 1;
  }

  /* Text Section */
  .text-section {
    padding: 1.5rem 0;
    text-align: left;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .card-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    max-width: 100%;
    white-space: normal;
    word-wrap: break-word;
    margin-bottom: 15px;
  }

  /* Responsive for Mobile View */
  @media (max-width: 1024px) {
    .content-container {
      flex-direction: column;
      padding: 0; /* Remove padding on mobile */
    }

    .carousel-card, .static-card {
      margin: 1rem 0.75rem;
      width: 100%;
    }
  }
  </style>
