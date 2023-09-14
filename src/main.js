import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Edit.use(router)
const Foo = createApp(App)
Foo.use(router)
Foo.mount("#app")
