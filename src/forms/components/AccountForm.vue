<template>
  <div id="content"
  >
    <div id="title"
         class="border-l-4 border-textHover">
      <p class="text-xl text-textHover font-bold ml-1">專案</p>
    </div>
    <div >
      <Tabs default-value="account">
        <div id="search-container">
          <div>
            <TabsList>
              <TabsTrigger value="account"> 個人專案 </TabsTrigger>
              <TabsTrigger value="password"> 團隊專案 </TabsTrigger>
            </TabsList>
          </div>
          <div class="flex justify-center xl:flex hidden">
            <Carousel
              class="relative w-full max-w-sm"
              :opts="{
                align: 'start',
              }"
            >
              <CarouselContent>
                <CarouselItem
                  v-for="(_, index) in 10"
                  :key="index"
                  class="lg:basis-1/5"
                >
                  <div class="">
                    <Card>
                      <CardContent
                        class="grid gap-1 aspect-square items-center justify-items-center"
                      >
                        <Avatar>
                          <AvatarImage :src="imageUrl"
                                       alt="@radix-vue" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span class="whitespace-nowrap text-black"
                        >全屋記{{ index + 1 }}</span
                        >
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div class="relative w-full max-w-sm items-center">
            <Input
              id="search"
              type="text"
              placeholder="請輸入專案名稱"
              class="pr-10 rounded-ro text-base"
              v-model="searchTerm"
            />
            <span
              class="absolute end-0 inset-y-0 flex items-center justify-center px-2 m-1 bg-textHover rounded-ro"
            >
              <Search class="size-4 text-muted-foreground text-white" />
            </span>
          </div>
        </div>

        <TabsContent value="account"
                     class="page-container">
          <div class="mx-auto bg-white rounded page-content">
            <DataTable
              class="p-5"
              :columns="columns"
              :data="data"
              :searchTerm="searchTerm"
            />
          </div>
          <!-- <BellIcon class="h-6 w-6 text-blue-500" />
          <ArrowDownIcon class="h-6 w-6 text-blue-500" /> -->
          <!-- <PopoverRoot>
            <PopoverTrigger class="PopoverTrigger"> More info </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent class="PopoverContent">
                Some more info...
                <PopoverClose />
                <PopoverArrow class="PopoverArrow" />
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot> -->
        </TabsContent>
        <TabsContent value="password"
                     class="page-container">
          <div class="mx-auto bg-white rounded page-content">
            <DataTable
              class="p-5"
              :columns="columns"
              :data="data"
              :searchTerm="searchTerm"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
    <Toaster/>
  </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BellIcon } from '@radix-icons/vue';
import { ArrowDownIcon } from '@radix-icons/vue';
import { onMounted, ref, computed } from 'vue';
import { columns } from '../payments/columns';
import type { Payment } from '../payments/columns';
import DataTable from '../payments/DataTable.vue';
import { Search } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
import { Toaster } from '@/components/ui/toast';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import avatarImage from '@/assets/avatar/avatar.jpg';
const imageUrl = ref(avatarImage);
const data = ref<Task[]>([]);
const searchTerm = ref<string>('');
async function getData (): Promise<Task[]> {
  const response = await fetch('/tasks.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

onMounted(async () => {
  data.value = await getData();
});
</script>
<style scoped>
#title {
  margin: 0 20px 32px 25px;
}
#search-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  margin: 1px;
  padding: 1px;
  margin: 0 20px 32px 25px;
  
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
.page-container {
  margin: 0;
}
.page-content {
  height: auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin: 0;
  height: auto;
  color: #4d4d4d;
  margin-bottom: 20px;
  margin-right: 5px;
}
@media (max-width: 1280px) {
  #search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
