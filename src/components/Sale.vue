<template>
  <div class="w-full">
    <div class="bg-white-light flex flex-col h-screen">
      <div class="flex-1 flex overflow-y-hidden">
        <aside class="sidebar bg-gun_power w-20 flex-none">
          <nav class="flex flex-col flex-none justify-between h-screen">
            <ul class="">
              <li class="flex justify-center py-5">
                <a href="" class="">
                  <icon class="uil-bars text-4xl text-gray-500"></icon>
                </a>
              </li>
              <li class="h-8 sh_none"></li>
              <li class="flex justify-center items-start py-5">
                <a href="" class="">
                  <icon class="uil-apps text-4xl text-gray-500"></icon>
                </a>
              </li>
              <li class="flex justify-center items-start py-5">
                <a href="" class="">
                  <icon class="uil-graph-bar text-4xl text-gray-500"></icon>
                </a>
              </li>
              <li class="flex justify-center items-start py-5">
                <a href="" class="">
                  <icon class="uil-crockery text-4xl text-gray-500"></icon>
                </a>
              </li>
              <li class="flex justify-center items-start py-5">
                <a href="" class="">
                  <icon class="uil-cart text-4xl text-gray-500"></icon>
                </a>
              </li>
              <li class="flex justify-center items-start py-5">
                <a href="" class="">
                  <icon class="uil-invoice text-4xl text-gray-500"></icon>
                </a>
              </li>
              <li class="h-56 sh_none"></li>
            </ul>
            <ul class="">
              <li class="flex justify-center py-5">
                <a href="" class="">
                  <icon class="uil-ellipsis-h text-4xl text-gray-500"></icon>
                </a>
              </li>
              <li class="border-t-2 border-gray-600 shadow"></li>
              <li class="flex justify-center py-5">
                <a href="" class="">
                  <icon class="uil-exit text-4xl text-gray-500"></icon>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <div class="w-full">
          <header class="bg-white shadow h-16 flex justify-between px-3">
            <nav class="h-full flex items-center">
              <h5 class="text-lg font-extrabold text-gray-700">Saley POS</h5>
            </nav>
            <nav class="h-full flex items-center">
              <ul class="h-full w-full flex">
                <li class="flex items-center h-full pl-3 pr-3">
                  <a href="" class="text-gray-600 text-2xl font-light">
                    <i class="uil-bell"></i>
                  </a>
                </li>
                <li class="username_profile flex items-center h-full pr-3">
                  <a href="" class="text-gray-600 text-sm font-bold">
                    Montaser Tomiaz
                  </a>
                </li>
                <li class="flex items-center border-l-2 pl-3 h-full">
                  <a href="">
                    <img src="../assets/img/team-1.jpg" class="rounded-full h-10 w-10" alt="">
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main class="flex-none h-screen bg-gray-300 main-content">
            <div class="flex px-3">
              <div class="w-2/3">
                <div class="category_tabbar bg-white h-12 shadow-md mt-3">
                  <ul class="flex h-full w-full overflow-y-hidden font-bold text-gray-600 items-center overflow-none whitespace-no-wrap text-lg">
                    <li class="p-5 h-full flex items-center border-b-4 border-red-400 text-lg"><a href="">Hot Drinks</a></li>
                    <li class="p-5 h-full flex items-center text-lg"><a href="">Food</a></li>
                    <li class="p-5 h-full flex items-center text-lg"><a href="">Salad</a></li>
                    <li class="p-5 h-full flex items-center text-lg"><a href="">Soft Drinks</a></li>
                    <li class="p-5 h-full flex items-center text-lg"><a href="">Shisha</a></li>

                  </ul>
                </div>
                <div class="product-list bg-white h-screen shadow-md mt-3 pb-3">
                </div>
                <div class="mt-30">dsaf</div>
              </div>
              <div class="w-1/3">
                <div class="bg-white h-64 shadow-md mt-3 ml-3"></div>
                <div class="bg-white h-full shadow-md mt-3 ml-3"></div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .main contetn .category_tabbar{
    ul{
      li{
        border-bottom: 2px solid red;
        a{

        }
      }
    }
  }
  @media (max-width: 1024px) {
    .sh_none{
      display: none;
    }
    .username_profile{
      display: none;
    }
  }
  @media (max-width: 768px) {
  }
</style>
