import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueAxios, axios);

Vue.prototype.$ajax = axios;

Vue.component('non_entity_word', {
  props: ['word'],
  template: "<span>{{word+' '}}</span>"
});


Vue.component('per', {
  props: ['word'],
  template: "<v-chip color='error' text-color='white'>{{ word }}</v-chip>"
});

Vue.component('loc', {
  props: ['word'],
  template: "<v-chip color='teal' text-color='white'>{{ word }}</v-chip>"
});

Vue.component('org', {
  props: ['word'],
  template: "<v-chip color='orange' text-color='white'>{{ word }}</v-chip>"
});

Vue.component('misc', {
  props: ['word'],
  template: "<v-chip color='primary' text-color='white'>{{ word }}</v-chip>"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
