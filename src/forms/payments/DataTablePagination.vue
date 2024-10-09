<script setup lang="ts">
import type { Table } from '@tanstack/vue-table';
import type { Task } from '../data/schema';
import { ref, watch, computed, defineProps } from 'vue';
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { number } from 'zod';
interface DataTablePaginationProps {
  table: Table<Task>;
}

const props = defineProps<DataTablePaginationProps>();
const inputPage = ref<number | null>(null);
const isInputLocked = ref(false); 

const currentPage = computed(() => {
  const pageIndex = props.table.getState().pagination.pageIndex + 1;
  return pageIndex;
});

const totalPages = computed(() => {
  const pageCount = props.table.getPageCount();
  return pageCount;
});


watch(inputPage, (newPage) => {
  const pageNumber = Number(newPage);


  if (newPage === null) {
    inputPage.value = null;
    isInputLocked.value = false; 
    return;
  }

  if (isNaN(pageNumber) || pageNumber < 1) {
    inputPage.value = 1; 
    isInputLocked.value = false;
  } else if (pageNumber > totalPages.value) {
    inputPage.value = totalPages.value;
    props.table.setPageIndex(totalPages.value - 1);
    isInputLocked.value = true;
  } else {

    props.table.setPageIndex(pageNumber - 1);
    isInputLocked.value = false;
  }
});


watch(totalPages, (newTotalPages) => {
  if (inputPage.value && inputPage.value > newTotalPages) {
    inputPage.value = newTotalPages; 
    isInputLocked.value = true;
  }
});
</script>

<template>
  <div class="flex items-center justify-center gap-4 px-2">
    <!-- <div class="flex-1 text-sm text-muted-foreground">
      {{ table.getFilteredSelectedRowModel().rows.length }} of
      {{ table.getFilteredRowModel().rows.length }} row(s) selected.
    </div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">
          Rows per page
        </p>
        <Select
          :model-value="`${table.getState().pagination.pageSize}`"
          @update:model-value="table.setPageSize"
        >
          <SelectTrigger class="h-8 w-[70px]">
            <SelectValue :placeholder="`${table.getState().pagination.pageSize}`" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem v-for="pageSize in [10, 20, 30, 40, 50]"
                        :key="pageSize"
                        :value="`${pageSize}`">
              {{ pageSize }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div
        class="flex w-[100px] items-center justify-center text-sm font-medium"
      >
        Page {{ table.getState().pagination.pageIndex + 1 }} of
        {{ table.getPageCount() }}
      </div>
      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          class="hidden h-8 w-8 p-0 lg:flex"
          :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)"
        >
          <span class="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="h-8 w-8 p-0"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <span class="sr-only">Go to previous page</span>
          <ChevronLeftIcon class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="h-8 w-8 p-0"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <span class="sr-only">Go to next page</span>
          <ChevronRightIcon class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="hidden h-8 w-8 p-0 lg:flex"
          :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <span class="sr-only">Go to last page</span>
          <DoubleArrowRightIcon class="h-4 w-4" />
        </Button>
      </div>
    </div> -->
    <div>
      <Pagination v-slot="{ page }"
                  :total="100"
                  :sibling-count="1"
                  show-edges>
        <PaginationList v-slot="{ items }"
                        class="flex items-center gap-1">
          <PaginationFirst
            :disabled="!table.getCanPreviousPage()"
            @click="table.setPageIndex(0)"
          />
          <PaginationPrev
            :disabled="!table.getCanPreviousPage()"
            @click="table.previousPage()"
          />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <Button
                class="w-10 h-10 p-0 rounded-ro"
                :class="
                  item.value === currentPage
                    ? 'bg-bgHover text-white hover:text-white'
                    : 'border bg-white text-black ring-transparent hover:bg-bgHover hover:text-white'
                "
                @click="table.setPageIndex(item.value - 1)"
              >
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else
                                :key="item.type"
                                :index="index" />
          </template>

          <PaginationNext
            :disabled="!table.getCanNextPage()"
            @click="table.nextPage()"
          />
          <PaginationLast
            :disabled="!table.getCanNextPage()"
            @click="table.setPageIndex(table.getPageCount() - 1)"
          />
        </PaginationList>
      </Pagination>
    </div>
    <div class="flex items-center gap-2 justify-center">
      跳至
      <Input
        v-model="inputPage"
        @input="validateInput"
        :readonly="isInputLocked" 
        placeholder=""
        class="rounded-lg bg-background w-[50px] h-[32px] bg-white text-black ring-transparent"
      />
      頁
    </div>
  </div>
</template>
