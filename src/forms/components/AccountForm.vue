<template>
  <div>
    <div>
      <p>專案</p>
    </div>
    <div>
      <Tabs default-value="account">
        <TabsList>
          <TabsTrigger value="account"> 個人專案 </TabsTrigger>
          <TabsTrigger value="password"> 團隊專案 </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
          <div class="container py-10 mx-auto">
            <DataTable :columns="columns"
                       :data="data" />
          </div>
          <BellIcon class="h-6 w-6 text-blue-500" />
          <ArrowDownIcon class="h-6 w-6 text-blue-500" />
          <PopoverRoot>
            <PopoverTrigger class="PopoverTrigger"> More info </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent class="PopoverContent">
                Some more info...
                <PopoverClose />
                <PopoverArrow class="PopoverArrow" />
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot>
        </TabsContent>
        <TabsContent value="password"> Change your password here. </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BellIcon } from '@radix-icons/vue';
import { ArrowDownIcon } from '@radix-icons/vue';
import { onMounted, ref } from 'vue';
import { columns } from '../payments/columns';
import type { Payment } from '../payments/columns';
import DataTable from '../payments/DataTable.vue';
// const data = ref<Payment[]>([]);

// async function getData (): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     // ...
//   ];
// }
// onMounted(async () => {
//   data.value = await getData();
// });
const data = ref<Task[]>([]); // 用于存储任务数据

async function getData (): Promise<Task[]> {
  // Fetch data from the JSON file
  const response = await fetch('/tasks.json'); // 确保路径正确
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json(); // 解析 JSON 数据
}

onMounted(async () => {
  data.value = await getData(); // 获取数据并赋值给 data
});
</script>
