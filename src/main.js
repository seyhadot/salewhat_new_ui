import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import './assets/styles/global.scss'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/styles/media_query.scss'
import locale from 'element-ui/lib/locale/lang/en'
import { MediaQueries, CommonBands } from 'vue-media-queries'

const mediaQueries = new MediaQueries({
  bands: CommonBands.Tailwind
})

Vue.use(ElementUI, { locale })
Vue.use(mediaQueries)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mediaQueries: mediaQueries,
  mixins: [CommonBands.Tailwind.mixin]
}).$mount('#app')
