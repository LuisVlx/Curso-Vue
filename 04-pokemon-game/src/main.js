import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
AOS.init();

import './css/styles.css'
import './css/animations.css'

createApp(App).mount('#app')
