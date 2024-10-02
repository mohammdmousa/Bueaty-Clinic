// import './assets/main.css'

import { createApp } from 'vue'
import App from './homeVue.vue'
import router from './router'
import store from './Store'
import Swal from 'vue-sweetalert2'
// import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'normalize.css'
import './style.css'
const app = createApp(App)
app.use(router).use(store).use(Swal)

app.mount('#app')
