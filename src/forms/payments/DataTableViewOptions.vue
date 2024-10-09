<script setup lang="ts">
import type { Table } from '@tanstack/vue-table';
import { computed, watchEffect } from 'vue';
import type { Task } from '../data/schema';
import { MixerHorizontalIcon } from '@radix-icons/vue';
import { Plus } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DataTableViewOptionsProps {
  table: Table<Task>;
}

const props = defineProps<DataTableViewOptionsProps>();

const columns = computed(() =>
  props.table
    .getAllColumns()
    .filter(
      (column) =>
        typeof column.accessorFn !== 'undefined' && column.getCanHide()
    )
);
const columnMapping = {
  id: '專案名稱',
  content: '項目負責人',
  workday: '開工日',
  completion: '完工日',
  updatetime: '更新時間',
  producer: '製作成員',
  buttons: '操作',
};
</script>

<template>
  <div class="flex gap-2 justify-end items-center"
       
  >
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline"
                  size="sm"
                  class="ml-auto hidden h-8 lg:flex">
            <MixerHorizontalIcon class="mr-2 h-4 w-4" />
            打開 / 關閉
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end"
                             class="w-[150px]">
          <DropdownMenuLabel>顯示 / 隱藏</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem
            v-for="column in columns"
            :key="column.id"
            class="capitalize"
            :checked="column.getIsVisible()"
            @update:checked="(value) => column.toggleVisibility(!!value)"
          >
            {{ columnMapping[column.id] ?? column.id }}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div>
      <div class="flex justify-center">
   
        <Button
          class="text-base text-white  bg-textHover hover:bg-bgHover w-screen max-w-28  rounded-ro"
        > <Plus class="mr-2 h-4 min-w-4 " />新增專案</Button
        >
      </div>
    </div>
  </div>
</template>
