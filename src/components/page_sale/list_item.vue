<template>
  <div class="mt-3 grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    <div class="border-2 relative shadow border-red-400 rounded-lg border-solid p-3">
      <div
        class="relative sm:h-20 lg:h-24 xl:h-32 w-full rounded-lg"
        style="background-size:cover;"
        :style="{'background-image': 'url(' + require('@/assets/img/item/1.jpg') + ')'}"
      >
        <div
          class="bg-gray-800 sm:h-8 h-12 py-2 opacity-75 text-center bottom-0 rounded-b-lg absolute w-full"
        ></div>
        <div
          class="sm:text-xs text-lg text-white absolute bottom-0 sm:h-8 h-12 w-full flex items-center justify-center uppercase font-semibold font-sans"
        >
          <h6 class>JOD 4000</h6>
        </div>
      </div>
      <div class="text-center xl:mt-3 mt-2">
        <h6 class="sm:text-xs font-serif text-gray-700 font-semibold">Food Industry</h6>
      </div>
    </div>

    <div class="relative shadow border-red-400 rounded-lg border-solid p-3">
      <div
        class="relative sm:h-20 lg:h-24 xl:h-32 w-full rounded-lg"
        style="background-size:cover;"
        :style="{'background-image': 'url(' + require('@/assets/img/item/2.jpg')  + ')'}"
      >
        <div
          class="bg-gray-800 sm:h-8 h-12 py-2 opacity-75 text-center bottom-0 rounded-b-lg absolute w-full"
        ></div>
        <div
          class="sm:text-xs text-lg text-white absolute bottom-0 sm:h-8 h-12 w-full flex items-center justify-center uppercase font-semibold font-sans"
        >
          <h6 class>JOD 4000</h6>
        </div>
      </div>
      <div class="text-center xl:mt-3 mt-2">
        <h6 class="sm:text-xs font-serif text-gray-700 font-semibold">Vegetable</h6>
      </div>
    </div>
    <div class="relative shadow border-red-400 rounded-lg border-solid p-3">
      <div
        class="relative sm:h-20 lg:h-24 xl:h-32 w-full rounded-lg"
        style="background-size:cover;"
        :style="{'background-image': 'url(' + require('@/assets/img/item/3.jpg') + ')'}"
      >
        <div
          class="bg-gray-800 sm:h-8 h-12 py-2 opacity-75 text-center bottom-0 rounded-b-lg absolute w-full"
        ></div>
        <div
          class="sm:text-xs text-lg text-white absolute bottom-0 sm:h-8 h-12 w-full flex items-center justify-center uppercase font-semibold font-sans"
        >
          <h6 class>JOD 4000</h6>
        </div>
      </div>
      <div class="text-center xl:mt-3 mt-2">
        <h6 class="sm:text-xs font-serif text-gray-700 font-semibold">Babeq</h6>
      </div>
    </div>
    <div class="relative shadow border-red-400 rounded-lg border-solid p-3">
      <div
        class="relative sm:h-20 lg:h-24 xl:h-32 w-full rounded-lg"
        style="background-size:cover;"
        :style="{'background-image': 'url(' + require('@/assets/img/item/4.jpg') + ')'}"
      >
        <div
          class="bg-gray-800 sm:h-8 h-12 py-2 opacity-75 text-center bottom-0 rounded-b-lg absolute w-full"
        ></div>
        <div
          class="sm:text-xs text-lg text-white absolute bottom-0 sm:h-8 h-12 w-full flex items-center justify-center uppercase font-semibold font-sans"
        >
          <h6 class>JOD 4000</h6>
        </div>
      </div>
      <div class="text-center xl:mt-3 mt-2">
        <h6 class="sm:text-xs font-serif text-gray-700 font-semibold">Sandwich</h6>
      </div>
    </div>
    <div class="relative shadow border-red-400 rounded-lg border-solid p-3">
      <div
        class="relative sm:h-20 lg:h-24 xl:h-32 w-full rounded-lg"
        style="background-size:cover;"
        :style="{'background-image': 'url(' + require('@/assets/img/item/5.jpg') + ')'}"
      >
        <div
          class="bg-gray-800 sm:h-8 h-12 py-2 opacity-75 text-center bottom-0 rounded-b-lg absolute w-full"
        ></div>
        <div
          class="sm:text-xs text-lg text-white absolute bottom-0 sm:h-8 h-12 w-full flex items-center justify-center uppercase font-semibold font-sans"
        >
          <h6 class>JOD 4000</h6>
        </div>
      </div>
      <div class="text-center xl:mt-3 mt-2">
        <h6 class="sm:text-xs font-serif text-gray-700 font-semibold">Hot Noodle</h6>
      </div>
    </div>
    <div class="relative shadow border-red-400 rounded-lg border-solid p-3">
      <div
        class="relative sm:h-20 lg:h-24 xl:h-32 w-full rounded-lg"
        style="background-size:cover;"
        :style="{'background-image': 'url(' + require('@/assets/img/item/6.jpg') + ')'}"
      >
        <div
          class="bg-gray-800 sm:h-8 h-12 py-2 opacity-75 text-center bottom-0 rounded-b-lg absolute w-full"
        ></div>
        <div
          class="sm:text-xs text-lg text-white absolute bottom-0 sm:h-8 h-12 w-full flex items-center justify-center uppercase font-semibold font-sans"
        >
          <h6 class>JOD 4000</h6>
        </div>
      </div>
      <div class="text-center xl:mt-3 mt-2">
        <h6 class="sm:text-xs font-serif text-gray-700 font-semibold">Rice Pigge</h6>
      </div>
    </div>
    <div
      v-for="item in 55"
      :key="item"
      class="relative shadow border-red-400 rounded-lg border-solid p-3"
    >
      <div
        class="relative sm:h-20 lg:h-24 xl:h-32 w-full rounded-lg"
        style="background-size:cover;"
        :style="{'background-image': 'url(' + require('@/assets/img/item/7.jpg') + ')'}"
      >
        <div
          class="bg-gray-800 sm:h-8 h-12 py-2 opacity-75 text-center bottom-0 rounded-b-lg absolute w-full"
        ></div>
        <div
          class="sm:text-xs text-lg text-white absolute bottom-0 sm:h-8 h-12 w-full flex items-center justify-center uppercase font-semibold font-sans"
        >
          <h6 class>JOD 400{{item}}</h6>
        </div>
      </div>
      <div class="text-center xl:mt-3 mt-2">
        <h6 class="sm:text-xs font-serif text-gray-700 font-semibold">Pizza Slice</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
