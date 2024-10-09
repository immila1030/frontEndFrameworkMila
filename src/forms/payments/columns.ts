import { h } from 'vue';
import { ColumnDef } from '@tanstack/vue-table';
import { Checkbox } from '@/components/ui/checkbox';
// import DropdownAction from './data-table-dropdown.vue';
// import { ArrowUpDown, ChevronDown } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
// import { labels, priorities, statuses } from '../data/data'
import DataTableColumnHeader from './DataTableColumnHeader.vue';
import DataTableRowActions from './DataTableRowActions.vue';
import type { Task } from '../data/schema';
import { Badge } from '@/components/ui/badge';
import { labels, priorities } from '../data/data';
import avatarImage from '@/assets/avatar/avatar.jpg';
import imageUrl from '@/assets/image/image1.jpg';
import deleteIcon from '@/assets/icons/delete.svg';
import edit from '@/assets/icons/edit.svg';
import share from '@/assets/icons/share.svg';
export const columns: ColumnDef<Task>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) =>
  //     h(Checkbox, {
  //       checked:
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && 'indeterminate'),
  //       'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
  //       ariaLabel: 'Select all',
  //       class: 'translate-y-0.5',
  //     }),
  //   cell: ({ row }) =>
  //     h(Checkbox, {
  //       checked: row.getIsSelected(),
  //       'onUpdate:checked': (value) => row.toggleSelected(!!value),
  //       ariaLabel: 'Select row',
  //       class: 'translate-y-0.5',
  //     }),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'id',
    header: ({ column }) =>
      h(DataTableColumnHeader, { column,
        title: '專案名稱' }),

    cell: ({ row }) => {
      return h('div', { class: 'flex space-x-2 items-center' }, [
        h('img', {
          src: imageUrl,
          alt: 'image',
          class: 'h-10 w-14 object-cover',
        }),
        h('div', { class: 'w-72 truncate' }, row.getValue('id')),
      ]);
    },
    enableSorting: false,
  },
  {
    accessorKey: 'content',
    header: ({ column }) =>
      h(DataTableColumnHeader, { column,
        title: '項目負責人' }),

    cell: ({ row }) => {
      const content = row.getValue('content') || {};
      const contentName = content.name || '';
      const contentPhone = content.phone || '';

      return h('div', { class: 'flex flex-col' }, [
        h('span', { class: 'max-w-[500px] truncate font-medium' }, contentName),
        h(
          'span',
          { class: 'max-w-[500px] truncate font-medium' },
          contentPhone
        ),
      ]);
    },
    enableSorting: false,
  },
  {
    accessorKey: 'workday',
    header: ({ column }) =>
      h(DataTableColumnHeader, { column,
        title: '開工日' }),

    cell: ({ row }) => {
      return h('div', { class: 'truncate' }, row.getValue('workday'));
    },
  },
  {
    accessorKey: 'completion',
    header: ({ column }) =>
      h(DataTableColumnHeader, { column,
        title: '完工日' }),

    cell: ({ row }) => {
      return h('div', { class: 'truncate' }, row.getValue('completion'));
    },
  },
  {
    accessorKey: 'updatetime',
    header: ({ column }) =>
      h(DataTableColumnHeader, { column,
        title: '更新時間' }),

    cell: ({ row }) => {
      return h('div', { class: 'truncate' }, row.getValue('updatetime'));
    },
  },
  {
    accessorKey: 'producer',
    header: ({ column }) =>
      h(
        'div',
        { class: 'flex items-center whitespace-nowrap justify-center' },
        [h(DataTableColumnHeader, { column,
          title: '製作成員' })]
      ),

    cell: ({ row }) => {
      return h(
        'div',
        {
          class: 'flex items-center flex justify-center',
        },
        [
          h('img', {
            src: avatarImage,
            alt: 'image',
            class: 'h-10 w-10 rounded-full object-cover ',
          }),
        ]
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'buttons',
    header: ({ column }) =>
      h(
        'div',
        {
          class: 'items-center whitespace-nowrap',
          style: {
            display: 'flex',
            justifyContent: 'center',
          },
        },
        [h(DataTableColumnHeader, { column,
          title: '操作' })]
      ),
    cell: ({ row }) => {
      return h(
        'div',
        {
          class: 'flex items-center justify-center gap-2',
        },
        [
          h(
            'button',
            {
              class: 'p-2 border-4 ',
              style: {
                backgroundColor: 'white',
                borderRadius: '5px',
                width: '100vw',
                maxWidth: '38px',
                border: '1px solid #EB9717',
                cursor: 'pointer',
              },
            },
            [
              h('img', {
                src: share,
                alt: '分享',
                class: 'h-22 w-22',
              }),
            ]
          ),
          h(
            'button',
            {
              class: 'p-2',
              style: {
                backgroundColor: 'white',
                border: '1px solid #015C61',
                width: '100vw',
                maxWidth: '38px',
                borderRadius: '5px',
                cursor: 'pointer',
              },
            },
            [
              h('img', {
                src: edit,
                alt: '編輯',
                class: 'h-22 w-22',
              }),
            ]
          ),
          h(
            'button',
            {
              class: 'p-2',
              style: {
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #FD4D4F',
                width: '100vw',
                maxWidth: '38px',
                cursor: 'pointer',
              },
            },
            [
              h('img', {
                src: deleteIcon,
                alt: '刪除',
                class: 'h-22 w-22',
              }),
            ]
          ),
        ]
      );
    },
    enableSorting: false, 
  },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => h(DataTableRowActions, { row }),
  // },
];
