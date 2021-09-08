import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebaseConfig from './components/config/firebaseConfig'
import firebase from 'firebase/compat'

firebase.initializeApp(firebaseConfig)
createApp(App).use(router).mount('#app')
