import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Nav from './components/Nav.vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'

let app;

onAuthStateChanged(auth,()=>{
    if(!app){
        app = createApp(App)

        app.use(createPinia())
        app.use(router)
        app.component("Nav",Nav)

        app.mount('#app')
    }
})
