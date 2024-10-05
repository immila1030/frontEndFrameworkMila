import { createApp } from 'vue';
import './assets/index.css';
import App from './App.vue';

import { setTimer } from './timer.js';
import { updateText } from './updataText.js';
import i18n from './i18n';
import { createPinia } from 'pinia'; // 改为导入 createPinia

const app = createApp(App);

app.use(i18n);
app.use(createPinia()); // 使用 createPinia 实例化

app.mount('#app');

setTimer('#timer');
updateText();
