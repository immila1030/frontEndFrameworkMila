<template>
  <div>
    <div class="border-l-2 border-textHover">
      <p class="pl-1 text-xl text-textHover font-bold">專案</p>
    </div>
    <div class="pt-5">
      <Tabs default-value="account">
        <div id="search-container">
          <div>
            <TabsList>
              <TabsTrigger value="account"> 個人專案 </TabsTrigger>
              <TabsTrigger value="password"> 團隊專案 </TabsTrigger>
            </TabsList>
          </div>
          <div class="flex justify-center">
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
                  class="md:basis-1/5 lg:basis-1/5"
                >
                  <div class="">
                    <Card>
                      <CardContent
                        class="flex gap-1 aspect-square items-center justify-center flex-col"
                      >
                        <Avatar>
                          <AvatarImage :src="imageUrl"
                                       alt="@radix-vue" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span class="font-semibold whitespace-nowrap text-black"
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
              class="absolute end-0 inset-y-0 flex items-center justify-center px-2 m-1  bg-textHover rounded-ro "
            >
              <Search
                class="size-4 text-muted-foreground text-white"
              />
            </span>
          </div>
        </div>

        <TabsContent value="account">
          <div class="container py-10 mx-auto">
            <DataTable :columns="columns"
                       :data="data"
                       :searchTerm="searchTerm"/>
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
import { onMounted, ref, computed } from 'vue';
import { columns } from '../payments/columns';
import type { Payment } from '../payments/columns';
import DataTable from '../payments/DataTable.vue';
import { Search } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
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
#search-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}
</style>
