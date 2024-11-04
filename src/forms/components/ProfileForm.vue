<template>
  <Tabs default-value="account"
        class="h-screen flex flex-col w-100 mx-[30px]">
    <!-- 這是我們的Tabs的header -->
    <TabsList class="flex justify-start pb-0 px-0">
      <TabsTrigger
        v-for="(tab, index) in tabs"
        :key="tab.value"
        :class="[
          'text-center py-3.5 px-7 rounded-t-[10px] rounded-b-none text-[#4d4d4d] text-base',
          index === 1
            ? 'data-[state=active]:shadow-[0_4px_4px_0_rgba(0,0,0,0.3)]'
            : 'data-[state=active]:shadow-[2px_0_2px_0_rgba(0,0,0,0.2)]',
        ]"
        :value="tab.value"
      >
        {{ tab.label }}
      </TabsTrigger>
      <!-- <TabsTrigger
        class="text-center py-3.5 px-7 bg-white rounded-t-[10px] rounded-b-none text-[#4d4d4d] text-base"
        value="account"
      >
        功能面板
      </TabsTrigger>
      <TabsTrigger
        class="text-center py-3.5 px-7 bg-white rounded-t-[10px] rounded-b-none text-[#4d4d4d] text-base"
        value="password"
      >
        參數面板
      </TabsTrigger> -->
    </TabsList>
    <!-- 內容部分 -->
    <div class="px-[25px] py-[20px] bg-white rounded page-content flex-1">
      <TabsContent value="account"> 功能面板的內容 </TabsContent>
      <TabsContent value="password"> 參數面板的內容 </TabsContent>
    </div>
  </Tabs>
</template>
<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ref } from 'vue';

const tabs = ref([
  { label: '功能面板',
    value: 'account' },
  { label: '參數面板',
    value: 'password' },
]);
</script>
<style scoped></style>
