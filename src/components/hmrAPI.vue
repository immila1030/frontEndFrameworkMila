<template>
  <div class="card">
    <p>我是時間：<span id="timer"></span></p>
    <p id="text">hello!Mila~~~</p>
    <p>{{ t('welcome') }}</p>
    <Button @click="switchLanguage">切換語言</Button>
    <div>
      <h1>目前螢幕寬度: {{ width }}</h1>
      <h1>目前螢幕高度: {{ height }}</h1>
    </div>
    <p>{{ store.message }}</p>
    <p>計數: {{ store.count }}</p>
    <Button @click="store.increment">增加</Button>
    <Button @click="setMessage('你好，Piniaaaaaaaaaaaa！')">更新消息</Button>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { useWindowSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { useStore } from '@/store'; // Pinia store

// 获取屏幕尺寸
const { width, height } = useWindowSize();

// 使用 vue-i18n 的 t 和 locale
const { t, locale } = useI18n();
const switchLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'; // 切换语言
};

//
// 使用 Pinia Store
const store = useStore();

// 更新消息的方法
const setMessage = (msg) => {
  store.setMessage(msg);
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
