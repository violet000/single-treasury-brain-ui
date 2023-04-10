import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入
import store from './store'

// 创建vue实例
const app = createApp(App);

// 挂载pinia
app.use(store);

// 挂载vue实例
app.mount('#app');

