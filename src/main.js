import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store/store'
import './css/style.css'

createApp(App).use(router).use(store).mount('#app')
