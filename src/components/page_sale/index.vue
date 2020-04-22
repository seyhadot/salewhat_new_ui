<template>
  <div class="w-full">
    <div class="bg-white-light flex flex-col h-screen">
      <div class="flex-1 flex overflow-y-hidden">
        <Sidebar />
        <div class="w-full pl-20">
          <Header />
          <main class="flex-none h-screen bg-gray-300 main-content">
            <div class="flex px-3">
              <div class="w-2/3">
                <div class="category_tabbar h-20 mt-3">
                  <Category />
                </div>
                <div
                  class="product-list bg-white h-screen82 shadow-md mt-3 sm:p-3 p-5 overflow-auto"
                >
                  <div class="w-full flex items-center relative">
                    <i class="uil-search absolute ml-3 text-2xl text-gray-500"></i>
                    <input
                      type="text"
                      placeholder="Searching your items"
                      class="w-full h-12 border-gray-400 border px-12 rounded-sm outline-none"
                    />
                    <img
                      src="../../assets/img/search_image/barcode.svg"
                      class="absolute right-0 text-2xl text-gray-500"
                      style="right: 0.4em;width: 50px"
                      alt
                    />
                  </div>
                  <ListItem />
                </div>
              </div>
              <div class="w-1/3">
                <div class="bg-white h-screen60 shadow-md mt-3 ml-3 overflow-auto">
                  <div
                    class="absolute z-50 lg:w-1/28 xlg:w-1/30 bg-white sm:p-3 xl:px-5 xl:pt-5 xl:pb-0"
                  >
                    <div class="flex justify-between sm:mb-2 xl:mb-5">
                      <div class="flex">
                        <h6
                          class="sm:text-sm xl:text-xl font-sans font-bold text-gray-700"
                        >Transaction</h6>
                        <h6
                          class="sm:text-sm xl:text-lg font-sans xl:font-bold text-green-600 ml-3"
                        >#0817</h6>
                      </div>
                      <div class="flex">
                        <a href>
                          <i
                            class="uil-plus-circle ml-5 text-red-700 sm:text-sm md:text-xl xl:text-3xl"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div
                      class="btn_control grid grid-cols-6 sm:mt-2 sm:gap-1 sm:gap-4 xl:gap-3 border-b border-gray-300 xl:pb-8 md:pb-4"
                    >
                      <button
                        class="sm:col-span-4 md:col-pan-3 col-span-3 border border-solid text-gray-700 sm:py-2 pb-1 sm:px-2 px-4 rounded-sm flex"
                      >
                        <div class="sm:flex sm:items-center sm:justify-center sm:w-full">
                          <i class="uil-users-alt sm:text-xl xl:text-3xl mr-4 sm:hidden lg:block"></i>
                          <h4 class="xs:text-xs xl:text-lg font-bold text-sm lg:block">Add Client</h4>
                        </div>
                      </button>
                      <button
                        class="sm:col-span-2 md:col-pan-3 col-span-3 border border-solid text-gray-700 sm:pt-0 sm:pb-0 xl:py-3 pb-1 sm:px-2 px-4 rounded-sm flex"
                      >
                        <div class="flex items-center justify-center w-full">
                          <i class="uil-bill sm:text-xl xl:text-3xl mr-4 sm:hidden"></i>
                          <h4
                            class="xs:text-xs xl:text-lg font-bold text-sm lg:block sm:flex sm:justify-between sm:text-center"
                          >Other</h4>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="w-full xl:bt-6 lg:mt-3 sm:px-3 xl:px-5 sm:pt-24 xl:pt-11">
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                  </div>
                </div>
                <div class="bg-white h-auto shadow-md mt-3 ml-3 pb-5 sm:pb-2">
                  <TotalPrice />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar.vue'
import Header from './header.vue'
import Category from './menu_category.vue'
import ListItem from './list_item.vue'
import TotalPrice from './total_price.vue'
import OrderList from './order_list.vue'
export default {
  name: 'swiper-example-multiple-slides-per-biew',
  title: 'Multiple slides per view',
  components: {
    Header,
    Sidebar,
    Category,
    ListItem,
    TotalPrice,
    OrderList
  }
}
</script>

<style lang="scss" scoped>
.h-screen60 {
  height: 60vh;
}
.h-screen82 {
  height: 82.2vh;
}

@media (max-width: 1366px) {
  .h-screen60 {
    height: 60.7vh;
  }
  .h-screen82 {
    height: 82.5vh;
  }
}
@media (max-width: 1024px) {
  .h-screen60 {
    height: 60.4vh;
  }
  .h-screen82 {
    height: 76.7vh;
  }
}
</style>
