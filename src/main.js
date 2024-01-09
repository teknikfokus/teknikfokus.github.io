import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store/store'
import './css/style.css'


const app = createApp(App)

app.use(router).use(store).mount('#app')
