import './main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vIntersect from '../v-intersect';

const app = createApp(App)


app.use(router)
app.directive('intersect', vIntersect);

app.mount('#app')
