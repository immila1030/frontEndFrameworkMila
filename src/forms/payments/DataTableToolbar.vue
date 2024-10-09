<script setup lang="ts">
import type { Table } from '@tanstack/vue-table';
import { computed, ref, watch } from 'vue';
import type { Task } from '../data/schema';
import { priorities, statuses } from '../data/data';
import DataTableFacetedFilter from './DataTableFacetedFilter.vue';
import DataTableViewOptions from './DataTableViewOptions.vue';
import { Cross2Icon } from '@radix-icons/vue';
import { Button } from '@/components/ui/button';

interface DataTableToolbarProps {
  table: Table<Task>;
}

const props = defineProps<DataTableToolbarProps>();

const isFiltered = computed(
  () => props.table.getState().columnFilters.length > 0
);
</script>

<template>
  <div class="">
    <!-- <div class="flex flex-1 items-center space-x-2">
      <DataTableFacetedFilter
        v-if="table.getColumn('status')"
        :column="table.getColumn('status')"
        title="Status"
        :options="statuses"
      />
      <DataTableFacetedFilter
        v-if="table.getColumn('priority')"
        :column="table.getColumn('priority')"
        title="Priority"
        :options="priorities"
      />

      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Reset
        <Cross2Icon class="ml-2 h-4 w-4" />
      </Button>
    </div> -->
    <DataTableViewOptions 
      :table="table"
    />
  </div>
</template>
