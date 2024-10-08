<template>
  <button
    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 sm:hidden"
    type="button"
    aria-haspopup="dialog"
    aria-expanded="false"
    data-state="closed"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-panel-left-icon h-5 w-5"
    >
      <rect width="18"
            height="18"
            x="3"
            y="3"
            rx="2"></rect>
      <path d="M9 3v18"></path></svg
    ><span class="sr-only"
    ><font style="vertical-align: inherit"
    ><font style="vertical-align: inherit">切換選單</font></font
    ></span
    >
  </button>
  <nav class="grid gap-4 text-sm text-muted-foreground">
    <Button
      v-for="item in sidebarNavItems"
      :key="item.title"
      as="a"
      :href="item.href"
      variant="ghost"
      :class="
        cn(
          'w-full text-left justify-start',
          $route.path === item.href &&
            'bg-muted hover:bg-muted border-l-3 borderColor'
        )
      "
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
