<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <Button
      v-for="item in sidebarNavItems"
      :key="item.title"
      as="a"
      :href="item.href"
      variant="ghost"
      :class="cn(
        'w-full text-left justify-start',
        $route.path === item.href && 'bg-muted hover:bg-muted'
      )"
    >
      {{ item.title }}
    </Button>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'; 
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; 

interface Item {
  title: string;
  href: string;
}

const $route = useRoute();

const sidebarNavItems: Item[] = [
  {
    title: '專案',
    href: '/forms/account',
  },
  {
    title: '手風琴',
    href: '/forms/appearance',
  },
  {
    title: '客製化顏色',
    href: '/forms/notifications',
  },
  {
    title: 'hmrAPI',
    href: '/forms/display',
  },
];
</script>
