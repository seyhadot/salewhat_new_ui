<template>
  <div class="flex lg:mb-3 xl:mb-6 xl:content-center">
    <div
      class="relative lg:h-16 lg:w-24 xl:h-20 xl:w-32 w-full flex align-text-top rounded-lg"
      style="background-size:cover;"
      :style="{'background-image': 'url(' + require('@/assets/img/item/2.jpg')  + ')'}"
    ></div>
    <div class="flex justify-between w-full items-center relative lg:-mt-3 xl:mt-0 xlg:-mt-3">
      <div class="lg:ml-3 xl:ml-6 relative">
        <h4 class="font-serif lg:text-sm xl:text-xl text-gray-700">Vegetables mixing</h4>
        <div class="lg:text-sm xl:text-2xl font-yeseva font-semibold text-red-700">7.76 $</div>
      </div>
      <div class="flex lg:absolute xl:absolute lg:mt-6 right-0 xl:-mt-1 xlg:mt-6">
        <a
          href
          class="border-gray-700 bg-gray-300 lg:h-6 lg:w-6 xl:w-10 xl:h-10 flex items-center align-middle justify-center content-center rounded-lg"
        >
          <div class="lg:text-1.7xl" style="height:50px;">-</div>
        </a>
        <h4 class="lg:text-lg xl:text-2xl sm:mx-2 xl:mx-6">0</h4>
        <a
          href
          class="border-gray-700 bg-gray-300 lg:h-6 lg:w-6 xl:w-10 xl:h-10 flex items-center align-middle justify-center content-center rounded-lg"
        >
          <div class="lg:text-1.2xl" style="height:35px;">+</div>
        </a>
      </div>
    </div>
  </div>
</template>
