import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome',
  },
  zh: {
    welcome: '歡迎',
  },
};

const i18n = createI18n({
  locale: 'en', // 默認語言
  messages,
  globalInjection: true, //  全局可使用 $t()
});

export default i18n;
