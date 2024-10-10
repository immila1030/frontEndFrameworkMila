
<template>
  <div id="content">
    <p>即將展示Hover效果</p>
    <Accordion
      type="multiple"
      class="w-full"
      collapsible
      :default-value="defaultValue"
    >
      <AccordionItem
        v-for="item in accordionItems"
        :key="item.value"
        :value="item.value"
        class="hover:bg-customHover"
      >
        <AccordionTrigger>{{ item.title }}</AccordionTrigger>
        <AccordionContent>
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
      <!-- <AccordionItem value="item-4">
        <AccordionTrigger>item 4</AccordionTrigger>
        <AccordionContent>
          <div class="text-green-600">I am item 4</div></AccordionContent
        ></AccordionItem
      > -->
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const accordionItems = [
  {
    value: 'item-1',
    title: '【電腦版】註冊教學&基礎帳戶設置',
    content: '官網註冊教學Step.1 連接全屋記的官網(https://qwhouse720.com/)，進入首頁後點選右上角的免費註冊Step.2 輸入個人資料後註冊即可完成(*注意:一支手機只能申辦一組帳號)...',
  },
  {
    value: 'item-2',
    title: '【App版】註冊流程',
    content:
      'APP註冊使用下載全屋記APP，進入頁面點選立即註冊。填入個人資料即可註冊完成，但注意一支手機只能申辦一組帳號。註冊完帳號名稱會顯示在公司名稱的表格中。點選頭像即可編輯用戶資訊以及設置資訊。還不清楚如...',
  },
  {
    value: 'item-3',
    title: '【App版】上傳及發佈作品',
    content: '拍攝發布全景照App與全景相機連接拍攝後點選發布，選擇好照片即可發布全景作品若已有全景照片也能利用電腦上傳匯入新的場景，隨時都能做新增和刪除點選從相簿上傳全景照，或是剛拍攝的全景照，填選作品名稱和分類...',
  },
];
const defaultValue = ['item-1']; //預設打開哪一個
</script>
<style scoped>
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
