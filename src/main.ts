import './assets/base.css'
import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { VueClipboard } from "@soerenmartius/vue3-clipboard";

const app = createApp(App)


app.use(VueClipboard).mount('#app')
