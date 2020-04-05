<template>
  <main class="main">
    <div class="control-main">
      <div class="bg-cover"></div>
      <div class="page-content">
        <h2 class="txt-title">Dashboard</h2>
        <div class="breadcrumb">
          <ul>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">App</a>
            </li>
            <li>
              <a href="">Report</a>
            </li>
          </ul>
        </div>
        <div class="mt-2 mb-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <div class="flex items-stretch flex-col rounded-lg shadow-lg overflow-hidden sh_card">
            <div class="flex items-center justify-between p-5 ">
              <div class="flex-i">
                <h5 class="text-lg uppercase text-gray-700">Tomorrow</h5>
                <h1 class="text-2xl font-bold text-gray-500">$24,50</h1>
              </div>
              <div class="flex-i">
                <div>
                  <div class="sh_icon h-12 w-12 rounded-full flex items-center justify-center">
                    <i class="uil-dollar-alt text-white text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-stretch flex-col rounded-lg shadow-lg overflow-hidden sh_card">
            <div class="flex items-center justify-between p-5 ">
              <div class="flex-i">
                <h5 class="text-lg uppercase text-gray-700">Today</h5>
                <h1 class="text-2xl font-bold text-gray-500">$24,50</h1>
              </div>
              <div class="flex-i">
                <div>
                  <div class="sh_icon1 h-12 w-12 rounded-full flex items-center justify-center">
                    <i class="uil-receipt text-white text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-stretch flex-col rounded-lg shadow-lg overflow-hidden sh_card">
            <div class="flex items-center justify-between p-5 ">
              <div class="flex-i">
                <h5 class="text-lg uppercase text-gray-700">Yesterday</h5>
                <h1 class="text-2xl font-bold text-gray-500">$24,50</h1>
              </div>
              <div class="flex-i">
                <div>
                  <div class="sh_icon2 h-12 w-12 rounded-full flex items-center justify-center">
                    <i class="uil-user text-white text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="card-box">
          <h3 class="main_question">Personal info</h3>
          <div class="ui-progressbar"></div>
          <div class="sh-form">
            <div class="sh-wrap sh-wrap-input" :class="{ 'sh-is-active': sf_label }">
              <label class="sh-label">First and Last Name</label>
              <input
                v-model="sf_label"
                type="text"
                class="sh-form-control sh-input"
                placeholder="First and Last Name"
              />
              <span for="email" v-if="!sf_label" class="error">Required</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!--
    <div v-for="(product, index) in products" :key="product._id">
      <h1>{{ product.name }}</h1>
  </div>-->
</template>

<script>
export default {
  data () {
    return {
      sf_label: null
    }
  }
  // async asyncData({ $axios }) {
  //   try {
  //     const response = await $axios.$get(`${process.env.API_URL}/products`);
  //     console.log(response);
  //     return {
  //       products: response.products
  //     };
  //   } catch (error) {}
  // }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500&display=swap');
.container {
  padding: 4em;
}
.breadcrumb {
  display: inline-block;
  border-radius: 5px;
  font-weight: 600;
  color: #062e69;
  font-size: 15px;
  padding: .75rem 1rem;
  padding-left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 8px;
  margin-top: -7px;
  ul{
    margin: 0;
    padding: 0 8px 0px 0;
    line-height: 25px;
    li{
      display: inline-block;
      list-style: none;
      margin: 0 0 0 2px;
      position: relative;
      color: white;
      a{
        color: white;
        opacity: 0.7;
      }
    }
    li:before {
      content: "";
      display: inline-block;
      font-size: 13px;
      margin-right: 4px;
      font-family: "Feather-Icons";
      font-weight: 700;
      transform: translate(0%, 5%);
      content: "\e930";
    }
    li:first-child:before {
      display: none;
    }
    li:first-child {
      margin-left: 0;
      a{
        color: #fff;
        &:hover{
          color: #fff;
        }
      }
    }
    li:last-child {
      a{
        opacity: 1;
        color: white;
      }
    }
  }
}

.flex-i .sh_icon{
  background: linear-gradient(50deg, #ffab00, #fff800) !important;
}
.flex-i .sh_icon1{
  background: linear-gradient(50deg, #6e00ff, #b0f) !important;
}
.flex-i .sh_icon2{
  background: linear-gradient(50deg, #ff5630, #ff9430) !important;
}
.sh_card{
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #eff2f7;
  border-radius: .375rem;
  -webkit-box-shadow: 0 7px 14px 0 rgba(65,69,88,.1), 0 3px 6px 0 rgba(0,0,0,.07);
  box-shadow: 0 7px 14px 0 rgba(65,69,88,.1), 0 3px 6px 0 rgba(0,0,0,.07);
}
.main {
  width: 100%;
  min-height: 100%;
  z-index: 2;
  .control-main {
    padding-top: 80px;
    height: 100%;
    position: relative;
    .bg-cover {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 260px;
      -webkit-transition: 0.3s ease all;
      transition: 0.3s ease all;
      background: -webkit-linear-gradient(to top right, #5049ad, #7b4cdb);
      background: linear-gradient(to top right, #5049ad, #7b4cdb);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0% 100%;
    }
    .page-content {
      max-width: 1300px;
      margin: auto;
      padding: 30px;
      padding-bottom: 0;
      position: relative;
    }
  }
}
.txt-title {
  font-size: 1.8rem;
  color: var(--white);
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 10px;
}
.card-box {
  width: 100%;
  margin: 0;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  background-color: var(--white);
  padding: 30px;
  font-family: 'Work Sans', sans-serif;
  h2.section_title {
    display: block;
    font-size: 26px;
    margin-bottom: 5px;
    font-weight: 600;
    opacity: 0.7;
    line-height: 31px;
  }
  h3.main_question {
    padding: 6px 20px;
    font-weight: 500;
    font-size: 19px;
    line-height: 23px;
    display: inline;
    background-color: #f0f0f0;
    border-radius: 10px 10px 0px 0px;
    color: #6c757d;
  }
  .ui-progressbar {
    height: 5px;
    width: 35%;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    border-radius: 15px;
    background-color: #f0f0f0;
    overflow: hidden;
    margin: 0px 0 10px 0;

  }
}
.sh-form {
  .sh-wrap {
    position: relative;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    label.sh-label {
      top: 1px;
      left: 13px;
      background-color: transparent;
      padding: 16px 4px;
      opacity: 0;
      visibility: hidden;
      display: block;
      position: absolute;
      top: -11px;
      left: 0;
      font-size: 11px;
      font-weight: 400;
      line-height: 1;
      color: var(--secondary);
      border-top-left-radius: 3px;
      transition: all 0.3s ease-in-out;
      z-index: 1;
    }
    label.sh-label {
      top: 1px;
      left: 13px;
      background-color: var(--white);
      padding: 16px 4px;
    }
    label.sh-label:before {
      content: '';
      display: block;
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      height: 1px;
      background-color: var(--white);
      z-index: -1;
    }

    input.sh-input {
      width: 100%;
      outline: 0;
      font-size: 14px;
      line-height: 1.4;
      border-radius: 3px;
      border: 1px solid none;
      background-color: var(--white);
      box-sizing: border-box;
      transition: all 0.3s ease-in-out;
      margin-bottom: 0;
      padding: 8px 16px;
    }
    .sh-form-control {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      line-height: 1.5;
      color: var(--gray);
      background-color: var(--white);
      background-clip: padding-box;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      border: 1px solid var(--border);
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      border-radius: 3px;
      font-size: 0.875rem;
      height: calc(2.65rem + 2px);
      outline: none;
    }
    .sh-form-control:focus {
      box-shadow: none;
      border-color: var(--indigo);
    }
    span.error {
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      font-size: 12px;
      position: absolute;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      top: -20px;
      right: -15px;
      z-index: 2;
      height: 25px;
      line-height: 1;
      background-color: var(--red);
      color: var(--white);
      font-weight: normal;
      display: inline-block;
      padding: 6px 8px;
    }
    span.error:after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 0 6px 6px 0;
      border-color: transparent var(--red);
      display: block;
      width: 0;
      z-index: 1;
      bottom: -6px;
      left: 20%;
    }
  }
  .sh-is-active label.sh-label {
    top: -10px;
    padding: 4px;
    opacity: 1;
    visibility: visible;
  }
}

/*-----Media Query-----*/
@media (max-width: 1366px) {
  .main {
    width: 100%;
    min-height: 100%;
    .control-main {
      padding-top: 80px;
      height: 100%;
      position: relative;
      .bg-cover {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 260px;
        -webkit-transition: 0.3s ease all;
        transition: 0.3s ease all;
        background: -webkit-linear-gradient(to top right, #5049ad, #7b4cdb);
        background: linear-gradient(to top right, #5049ad, #7b4cdb);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0% 100%;
      }
      .page-content {
        max-width: 1050px;
        margin: auto;
        padding: 30px;
        padding-bottom: 0;
        position: relative;
      }
    }
  }
}

@media (max-width: 1024px) {
  .main {
    width: 100%;
    min-height: 100%;
    .control-main {
      padding-top: 80px;
      height: 100%;
      position: relative;
      .bg-cover {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 260px;
        -webkit-transition: 0.3s ease all;
        transition: 0.3s ease all;
        background: -webkit-linear-gradient(to top right, #5049ad, #7b4cdb);
        background: linear-gradient(to top right, #5049ad, #7b4cdb);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0% 100%;
      }
      .page-content {
        max-width: 850px;
        margin: auto;
        padding: 30px;
        padding-bottom: 0;
        position: relative;
      }
    }
  }
}

</style>
