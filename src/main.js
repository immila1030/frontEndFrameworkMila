import { createApp } from 'vue';
import './assets/index.css';
import App from './App.vue';
import { setTimer } from './timer.js';
import { updateText } from './updataText.js';
import i18n from './i18n';
import { createPinia } from 'pinia';
import router from './router';  
const app = createApp(App);

app.use(router);  
app.use(i18n);
app.use(createPinia());

app.mount('#app');

setTimer('#timer');
updateText();
