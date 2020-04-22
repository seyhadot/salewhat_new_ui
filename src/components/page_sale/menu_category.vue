<template>
  <swiper class="swiper h-full" :options="swiperOption">
    <swiper-slide class="flex items-center shadow-md">
      <div
        class="relative h-full w-full opacity-75"
        style="background-size:cover;"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/menu_category/beef.jpg') + ')'
        }"
      ></div>
      <h3
        class="sm:text-sm lg:text-xl bayon_font leading-none absolute top-0 ml-3 mt-2 text-gray-700 font-extrabold"
      >សាច់គោ</h3>
      <div class="ml-4 absolute bottom-0 mb-2 mr-2 right-0">
        <h6 class="text-xs text-gray-600 bg-white rounded-full" style="padding: 2px 10px;">16 items</h6>
      </div>
    </swiper-slide>
    <swiper-slide class="flex items-center shadow-md">
      <div
        class="relative h-full w-full opacity-75"
        style="background-size:cover;"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/menu_category/grocery.jpg') + ')'
        }"
      ></div>
      <h3
        class="sm:text-sm lg:text-xl bayon_font leading-none absolute top-0 ml-3 mt-2 text-gray-700 font-extrabold"
      >គ្រឿងទេស</h3>
      <div class="ml-4 absolute bottom-0 mb-2 mr-2 right-0">
        <h6 class="text-xs text-gray-600 bg-white rounded-full" style="padding: 2px 10px;">25 items</h6>
      </div>
    </swiper-slide>
    <swiper-slide class="flex items-center shadow-md">
      <div
        class="h-full w-full opacity-75"
        style="background-size:cover;"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/menu_category/hot_drink.jpg') + ')'
        }"
      ></div>
      <h3
        class="sm:text-sm lg:text-xl bayon_font leading-none absolute top-0 ml-3 mt-2 text-gray-700 font-extrabold"
      >កាហ្វេ</h3>
      <div class="ml-4 absolute bottom-0 mb-2 mr-2 right-0">
        <h6 class="text-xs text-gray-600 bg-white rounded-full" style="padding: 2px 10px;">38 items</h6>
      </div>
    </swiper-slide>
    <swiper-slide class="flex items-center shadow-md">
      <div
        class="relative h-full w-full opacity-75"
        style="background-size:cover;"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/menu_category/soft_drink.jpg') + ')'
        }"
      ></div>
      <h3
        class="sm:text-sm lg:text-xl bayon_font leading-none absolute top-0 ml-3 mt-2 text-gray-700 font-extrabold"
      >ភេសជ្ជះ</h3>
      <div class="ml-4 absolute bottom-0 mb-2 mr-2 right-0">
        <h6 class="text-xs text-gray-600 bg-white rounded-full" style="padding: 2px 10px;">29 items</h6>
      </div>
    </swiper-slide>
    <swiper-slide class="flex items-center shadow-md">
      <div
        class="relative h-full w-full opacity-75"
        style="background-size:cover;"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/menu_category/salad.jpg') + ')'
        }"
      ></div>
      <h3
        class="sm:text-sm lg:text-xl bayon_font leading-none absolute top-0 ml-3 mt-2 text-gray-700 font-extrabold"
      >បន្លែរ</h3>
      <div class="ml-4 absolute bottom-0 mb-2 mr-2 right-0">
        <h6 class="text-xs text-gray-600 bg-white rounded-full" style="padding: 2px 10px;">10 items</h6>
      </div>
    </swiper-slide>
    <swiper-slide class="flex items-center shadow-md">
      <div
        class="relative h-full w-full opacity-75"
        style="background-size:cover;"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/menu_category/ice.jpg') + ')'
        }"
      ></div>
      <h3
        class="sm:text-sm lg:text-xl bayon_font leading-none absolute top-0 ml-3 mt-2 text-gray-700 font-extrabold"
      >Ice-Cream</h3>
      <div class="ml-4 absolute bottom-0 mb-2 mr-2 right-0">
        <h6 class="text-xs text-gray-600 bg-white rounded-full" style="padding: 2px 10px;">8 items</h6>
      </div>
    </swiper-slide>
    <swiper-slide class="flex items-center shadow-md">
      <div
        class="relative h-full w-full opacity-75"
        style="background-size:cover;"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/menu_category/book.jpg') + ')'
        }"
      ></div>
      <h3
        class="sm:text-sm lg:text-xl bayon_font leading-none absolute top-0 ml-3 mt-2 text-gray-700 font-extrabold"
      >សៀវភៅ</h3>
      <div class="ml-4 absolute bottom-0 mb-2 mr-2 right-0">
        <h6 class="text-xs text-gray-600 bg-white rounded-full" style="padding: 2px 10px;">13 items</h6>
      </div>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 12,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 12
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 12
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

.bayon_font {
  font-family: 'Bayon', 'Patua One', cursive;
}
</style>
