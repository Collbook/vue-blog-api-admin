
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Backend  
Vue.component("adminMaster", require("./components/backend/admin/AdminMaster.vue").default);


// v-form 
/*v-form*/
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

/*sweetalert2 */
import Swal from 'sweetalert2'
window.swal = Swal;

// alert message top right success
const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = Toast;

/* momentjs */
var moment = require('moment');
moment().format();


/* v-ckeditor */
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );
 

// import filter 
import { filter } from './filter'

// import routers
import { routes } from './routers'

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
})

/* vuex for store */

import Vuex from 'vuex'

Vue.use(Vuex)

/* store vuex */
import storeData from "./store/index"

// create store vuex
const store = new Vuex.Store(
  storeData
)


const app = new Vue({
  el: "#app",
  router,
  // store vuex
  store
})

