<template>
  <div class="card">
    <!-- <p>我是時間：<span id="timer"></span></p> -->
    <!-- <p id="text">hello!Mila~~~</p> -->
    <p>使用i18b切換語言</p>
    <p>{{ t('welcome') }}</p>
    <Button @click="switchLanguage">切換語言</Button>
    <Separator class="my-6" />
    <p>使用vueuse偵測螢幕寬高</p>
    <div>
      <h1>目前螢幕寬度: {{ width }}</h1>
      <h1>目前螢幕高度: {{ height }}</h1>
    </div>
    <Separator class="my-6" />
    <p>使用Pinia更新資料及儲存資料</p>
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
import { useStore } from '@/store';
import { Separator } from '@/components/ui/separator';

const { width, height } = useWindowSize();


const { t, locale } = useI18n();
const switchLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'; 
};


const store = useStore();


const setMessage = (msg) => {
  store.setMessage(msg);
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
