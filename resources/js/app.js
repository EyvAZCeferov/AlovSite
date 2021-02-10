require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSocialSharing from 'vue-social-sharing';
import Paginate from 'vuejs-paginate'
import General from './components/layouts/general';
import router from './router';
Vue.use(VueRouter);
Vue.use(VueSocialSharing);
Vue.component('paginate', Paginate);

require('lang.js');
import VueLang from '@eli5/vue-lang-js'
import translations from './vue-translations.js';

Vue.use(VueLang, {
  messages: translations, // Provide locale file
  locale: 'az', // Set locale
  fallback: 'en' // Set fallback lacale
});

new Vue({
    el: '#app',
    render :h=>h(General),
    modules:[
      'vue-social-sharing/nuxt'
    ],
    router
});




