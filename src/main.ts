import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import antd from "ant-design-vue";

createApp(App)
.use(createPinia())
.use(router)
.use(antd)
.mount('#app')
