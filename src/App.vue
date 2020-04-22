<template>
  <div id="app">
    <div class="flex flex-row sh_control">
      <!-- <Header /> -->
      <!-- <Sidebar /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Header,
    Sidebar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,500,600&display=swap');
:root {
  --icon: #909090;
  --bg: #edf2f9;
  --border: #ddd;
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #e34f4f;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #1dbe72;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-soft: #a8a8ab;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: Muli, Poppins, Helvetica, sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
  background: var(--white);
  color: var(--grey);
  -webkit-text-size-adjust: 100%;
  background-color: var(--bg);
}
::-webkit-scrollbar {
  display: none;
}
</style>
