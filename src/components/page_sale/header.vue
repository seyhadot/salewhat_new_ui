<template>
  <header class="bg-white w-full shadow h-16 flex justify-between px-3">
    <nav class="h-full flex items-center">
      <h5 class="text-lg font-extrabold text-gray-700">Saley POS</h5>
    </nav>
    <nav class="h-full flex items-center">
      <ul class="h-full w-full flex">
        <li class="flex items-center h-full pl-3 pr-3">
          <a href class="text-gray-600 text-2xl font-light">
            <i class="uil-bell"></i>
          </a>
        </li>
        <li class="username_profile flex items-center pr-3">
          <a href class="text-gray-600 text-sm font-bold">Montaser Tomiaz</a>
        </li>
        <li class="flex items-center border-l pl-3">
          <a href>
            <img src="@/assets/img/team-1.jpg" class="rounded-full h-10 w-10" alt />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@media (max-width: 1024px) {
  .sh_none {
    display: none;
  }
  .username_profile {
    display: none;
  }
}
</style>
