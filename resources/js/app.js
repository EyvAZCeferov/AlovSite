require('./bootstrap');
require('lang.js');
require('./store/subscriber');
import 'es6-promise/auto';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSocialSharing from 'vue-social-sharing';
import VueToast from 'vue-toast-notification';
import VueLang from '@eli5/vue-lang-js';
import Vuex from 'vuex';
import translations from './vue-translations.js';
import 'vue-toast-notification/dist/theme-sugar.css';
import axios from 'axios';
import store from './store'

import General from './components/layouts/general';
import router from './router';

Vue.config.productionTip=false;
Vue.use(VueRouter);
Vue.use(VueSocialSharing);
Vue.use(VueToast,{
    duration: 3000,
    position: "top-right",
    dismissible:true,
    queue:false,
});
Vue.use(VueLang, {
  messages: translations, // Provide locale file
  locale: 'az', // Set locale
  fallback: 'en' // Set fallback lacale
})
Vue.use(Vuex)

axios.defaults.baseURL="http://localhost:8000/api/"

store.dispatch('auth/attempt',localStorage.getItem('token')).then(()=>{
    new Vue({
        el: '#app',
        render :h=>h(General),
        modules:[
        'vue-social-sharing/nuxt'
        ],
        router,
        store,
    });
})




