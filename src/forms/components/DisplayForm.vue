<template>
  <div id="content"
       class="card">
    <!-- <p>我是時間：<span id="timer"></span></p> -->
    <!-- <p id="text">hello!Mila~~~</p> -->
    <Separator class="my-6" />
    <p>使用vueuse偵測螢幕寬高</p>
    <div>
      <h1>目前螢幕寬度: {{ width }}</h1>
      <h1>目前螢幕高度: {{ height }}</h1>
    </div>
    <Separator class="my-6" />

    <p>使用Pinia更新資料及儲存資料</p>
    <p>{{ store.message }}</p>
    <Button
      class="w-20 text-base text-white border bg-textHover hover:bg-bgHover rounded-ro text-sm"
      @click="setMessage('你好，Piniaaaaaaaaaaaa！')"
    >更新消息</Button
    >
    <p>計數: {{ store.count }}</p>
    <Button
      class="w-20 text-base text-white border bg-textHover hover:bg-bgHover rounded-ro text-sm"
      @click="store.increment"
    >增加</Button
    >
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
#content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  flex: 1;
  overflow: scroll;
  scrollbar-width: none;
  padding: 0;
  margin: 0 20px;
}
</style>
