// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/routes.ts'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

myApp.use(router)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
