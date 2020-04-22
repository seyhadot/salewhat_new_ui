<template>
  <div class="flex justify-between h-full flex-col">
    <div class="sm:px-3 sm:py-2 xl:p-5 border-b border-gray-300">
      <div class="flex justify-between items-center sm:mb-0 xl:mb-2">
        <h2 class="sm:text-sm lg:text-lg xl:text-xl text-gray-700">Discount</h2>
        <h1 class="sm:text-base lg:text-lg xl:text-2xl font-bold text-gray-800">
          <span class="font-bold">$</span> 0.000
        </h1>
      </div>
      <div class="flex justify-between items-center">
        <h2 class="sm:text-sm lg:text-lg xl:text-xl text-gray-700">Tax</h2>
        <h1 class="sm:text-base lg:text-lg xl:text-2xl font-bold text-gray-800">
          <span class="font-bold">$</span> 0.000
        </h1>
      </div>
    </div>
    <div
      class="flex justify-between items-center pb-5 sm:px-3 sm:mt-2 sm:pb-2 xl:px-5 mt-5 border-b border-gray-300"
    >
      <h2 class="sm:text-sm lg:text-lg xl:text-3xl font-semibold text-gray-800">Total</h2>
      <h1 class="sm:text-xl lg:text-2xl xl:text-4xl text-4xl font-bold text-green-600">
        <span class="font-bold">$</span> 0.000
      </h1>
    </div>
    <div class="btn_control mt-5 grid grid-cols-4 sm:px-2 sm:mt-2 px-5 sm:gap-1 xl:gap-3">
      <button
        class="col-span-1 border border-solid text-gray-700 sm:py-2 pt-2 pb-1 sm:px-2 px-4 rounded-sm items-center flex justify-center flex-col"
      >
        <i class="uil-print sm:text-xl xl:text-3xl"></i>
        <h4 class="sm:text-xs xl:text-lg text-sm sm:mt-1 mt-1 lg:block sm:hidden">Print</h4>
      </button>
      <button
        class="col-span-1 border border-solid text-gray-700 sm:pt-1 sm:pb-0 xl:py-3 pt-2 pb-1 sm:px-2 px-4 rounded-sm items-center flex justify-center flex-col"
      >
        <i class="uil-bill sm:text-xl xl:text-3xl"></i>
        <h4 class="sm:text-xs xl:text-lg sm:mt-1 text-sm mt-1 lg:block sm:hidden">Discount</h4>
      </button>
      <button
        class="col-span-2 bg-green-600 hover:bg-gray-400 text-white py-0 sm:px-1 px-4 rounded-sm xs:text-sm sm:text-lg xl:text-2xl font-serif items-center"
      >Payment</button>
    </div>
  </div>
</template>
