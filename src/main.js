import { createApp } from 'vue';
import App from './App.vue';
// On importe notre router
import router from './routing';
//import store from './store' // short for @/store/index

const app = createApp(App);

// On utilise notre router grâce à la méthode 'use'
app.use(router);

app.mount('#app');

//app.use(store)