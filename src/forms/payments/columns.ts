import { h, onMounted } from 'vue';
import { ColumnDef } from '@tanstack/vue-table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
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
import { CopyIcon } from '@radix-icons/vue';
import { useToast } from '@/components/ui/toast/use-toast';
import { Toaster } from '@/components/ui/toast';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

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
      const { toast } = useToast();
      return h(
        'div',
        {
          class: 'flex items-center justify-center gap-2',
        },
        [
          h(
            Dialog,
            {},
            {
              default: () => [
                h(
                  DialogTrigger,
                  { asChild: true },
                  {
                    default: () =>
                      h(
                        'button',
                        {
                          class: 'p-2 border-4',
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
                  }
                ),
                h(
                  DialogContent,
                  { class: 'sm:max-w-md' },
                  {
                    default: () => [
                      h(
                        DialogHeader,
                        {},
                        {
                          default: () => [
                            h(DialogTitle, {}, '分享連結'),
                            h(
                              DialogDescription,
                              {},
                              '按下複製按鈕即可分享連結!'
                            ),
                          ],
                        }
                      ),
                      h('div', { class: 'flex items-center space-x-2' }, [
                        h('div', { class: 'grid flex-1 gap-2' }, [
                          h('label', { for: 'link',
                            class: 'sr-only' }, 'Link'),
                          h('input', {
                            id: 'link',
                            value: 'https://shadcn-vue.com/docs/installation',
                            readOnly: true,
                            class: 'input-class',
                          }),
                        ]),
                        h(
                          'button',
                          {
                            type: 'button',
                            size: 'sm',
                            class: 'p-1 border ',
                            onClick: () => {
                              const link =
                                'https://shadcn-vue.com/docs/installation';
                              navigator.clipboard
                                .writeText(link)
                                .then(() => {
                                  toast({
                                    title: '已儲存連結！',
                                    description: '趕快分享你的專案吧！',
                                    show: true,
                                  });
                                })
                                .catch((err) => {
                                  console.error('Failed to copy: ', err);
                                });
                            },
                          },
                          [
                            h('span', { class: 'sr-only ' }, 'Copy'),
                            h(CopyIcon, { class: 'w-4 h-4' }),
                          ]
                        ),
                      ]),
                    ],
                  }
                ),
              ],
            }
          ),
          h(
            Dialog,
            {},
            {
              default: () => [
                h(
                  DialogTrigger,
                  { asChild: true },
                  {
                    default: () =>
                      h(
                        Button,
                        {
                          class: 'p-2 border-4',
                          style: {
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            width: '100vw',
                            maxWidth: '38px',
                            border: '1px solid #015C61',
                            cursor: 'pointer',
                          },
                        },
                        h('img', {
                          src: edit,
                          alt: 'edit',
                          class: 'h-22 w-22',
                        })
                      ),
                  }
                ),
                h(
                  DialogContent,
                  { class: 'sm:max-w-md' },
                  {
                    default: () => [
                      h(
                        DialogHeader,
                        {},
                        {
                          default: () => [
                            h(DialogTitle, {}, '編輯個人資料'),
                            h(
                              DialogDescription,
                              {},
                              '可修改您的專案名稱。完成後請點擊保存按鈕。'
                            ),
                          ],
                        }
                      ),
                      h(Input, { placeholder: '專案名稱' }),
                      h(
                        DialogFooter,
                        {},
                        {
                          default: () => [
                            h(
                              DialogClose,
                              { asChild: true },
                              {
                                default: () =>
                                  h(
                                    'button',
                                    {
                                      type: 'button',
                                      class: 'button-class',
                                    },
                                    '取消'
                                  ),
                              }
                            ),
                            h(
                              Button,
                              {
                                onClick: () => {
                                  toast({
                                    title: '已保存變更！',
                                    description: '您的專案名稱已更新。',
                                    show: true,
                                  });
                                },
                              },
                              h(
                                DialogClose,
                                { asChild: true },
                                {
                                  default: () => [
                                    h(
                                      'button',
                                      {
                                        type: 'button',
                                        class: 'button-class',
                                      },
                                      '保存變更'
                                    ),
                                  ],
                                }
                              )
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
              ],
            }
          ),

          h(
            AlertDialog,
            {},
            {
              default: () => [
                h(
                  AlertDialogTrigger,
                  {},
                  {
                    default: () =>
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
                  }
                ),
                h(
                  AlertDialogContent,
                  {},
                  {
                    default: () => [
                      h(
                        AlertDialogHeader,
                        {},
                        {
                          default: () => [
                            h(AlertDialogTitle, {}, '確定要刪除這個項目嗎？'),
                            h(
                              AlertDialogDescription,
                              {},
                              '此操作將永久刪除該項目！'
                            ),
                          ],
                        }
                      ),
                      h(
                        AlertDialogFooter,
                        {},
                        {
                          default: () => [
                            h(AlertDialogCancel, {}, '取消'),
                            h(
                              AlertDialogAction,
                              {
                                onClick: () => {
                                  console.log('確認刪除');
                                },
                              },
                              '確認刪除'
                            ),
                          ],
                        }
                      ),
                    ],
                  }
                ),
              ],
            }
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
