<script setup lang="ts">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table';
import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useVueTable,
} from '@tanstack/vue-table';

import { ref, watch, computed } from 'vue';
import type { Task } from '../data/schema';
import DataTablePagination from './DataTablePagination.vue';
import DataTableToolbar from './DataTableToolbar.vue';
import { valueUpdater } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface DataTableProps {
  columns: ColumnDef<Task, any>[]; 
  data: Task[]; 
  searchTerm: string; 
}

const props = defineProps<DataTableProps>();

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});

const pagination = ref({
  pageIndex: 0,
  pageSize: 10,
});

const sortedData = computed(() => {
  let data = [...props.data];

  if (sorting.value.length) {
    data.sort((a, b) => {
      const aValue = a[sorting.value[0].id];
      const bValue = b[sorting.value[0].id];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sorting.value[0].desc
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue);
      } else {
        return sorting.value[0].desc ? bValue - aValue : aValue - bValue;
      }
    });
  }

  return data;
});
const table = useVueTable({
  get data () {
    return sortedData.value;
  },
  get columns () {
    return props.columns;
  },
  state: {
    get sorting () {
      return sorting.value;
    },
    get columnFilters () {
      return columnFilters.value;
    },
    get columnVisibility () {
      return columnVisibility.value;
    },
    get rowSelection () {
      return rowSelection.value;
    },
    get pagination () {
      return pagination.value;
    },
  },
  enableRowSelection: true,
  onSortingChange: (updaterOrValue) => {
    valueUpdater(updaterOrValue, sorting);
  },
  onColumnFiltersChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, rowSelection),
  onPaginationChange: (updaterOrValue) => {
    valueUpdater(updaterOrValue, pagination);
  },
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
});

watch(
  () => props.searchTerm,
  (newSearchTerm) => {
    columnFilters.value = newSearchTerm
      ? [{ id: 'id',
        value: newSearchTerm }]
      : [];
  }
);

const handleHeaderClick = (header) => {
  const currentSorting = sorting.value.find((sort) => sort.id === header.id);
  if (!currentSorting) {
    sorting.value = [{ id: header.id,
      desc: false }];
  } else {
    sorting.value = [{ id: currentSorting.id,
      desc: !currentSorting.desc }];
  }

  valueUpdater(sorting.value, sorting);
};
</script>

<template>
  <div class="space-y-4">
    <DataTableToolbar :table="table" />
    <div class="rounded-md">
      <Table>
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
                @click="handleHeaderClick(header)"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <TableRow
              v-for="row in table.getRowModel().rows"
              :key="row.id"
              :data-state="row.getIsSelected() && 'selected'"
            >
              <TableCell v-for="cell in row.getVisibleCells()"
                         :key="cell.id">
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </TableCell>
            </TableRow>
          </template>

          <TableRow v-else>
            <TableCell :colspan="props.columns.length"
                       class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <DataTablePagination :table="table" />
  </div>
</template>
