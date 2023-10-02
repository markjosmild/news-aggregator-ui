import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/injex.js'

createApp(App)
.use(router)
.mount('#app')
