import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome',
    email:'email',
    create:'Create an account',
    account:'Enter your email below to create your account',
    sign:'Sign In With Email',
    continue:'OR',
    agree:'By clicking continue, you agree to our ',
    terms:'Terms of Service',
    and:'and',
    Privacy:'Privacy Policy',
    emailError:'Email Error',
    
  },
  zh: {
    welcome: '歡迎',
    create:'建立一個帳戶',
    email:'電子郵件',
    account:'在下面輸入您的電子郵件以建立您的帳戶',
    sign:'登入您的電子郵件',
    continue:'或',
    agree:'登入後即表示您同意我們的 ',
    terms:'服務條款',
    and:'和',
    Privacy:'隱私權政策',
    emailError:'請輸入有效電子郵件',
  },
};

const i18n = createI18n({
  locale: 'zh', // 默認語言
  messages,
  globalInjection: true, //  全局可使用 $t()
});

export default i18n;
