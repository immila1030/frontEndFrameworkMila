import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { setTimer } from './timer.js';
import { updateText } from './updataText.js';

createApp(App).mount('#app');
setTimer('#timer');
updateText();
