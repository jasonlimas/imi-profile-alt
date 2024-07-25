<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Slide Image">
          <div>
            <h3>Tagline</h3>
            <h2>Medium length section heading goes here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Navigation -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper';
  
  export default {
    name: 'SwiperComponent',
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
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  };
  </script>
  
  <style>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .swiper-slide img {
    width: 100%;
    height: auto;
  }
  </style>
  