import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router';
import App from './App.vue'
import './index.css'
import DIY from './components/DIY.vue';
import DIY2 from './components/DIY2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: DIY },
    { path: '/diy2', component: DIY2 }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
