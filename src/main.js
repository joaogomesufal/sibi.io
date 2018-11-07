import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import vueSmoothScroll from 'vue-smooth-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

/*Css Import*/
import './assets/sass/app.scss'
import 'vuetify/dist/vuetify.min.css'
import 'vue2-animate/src/sass/vue2-animate.scss'


Vue.use(vueSmoothScroll)
Vue.use(Vuetify)


new Vue({
  el: '#app',
  created() {
    AOS.init();
  },
  render: h => h(App)
})
