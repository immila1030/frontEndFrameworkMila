<template>
  <button
    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 sm:hidden"
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
  <div class="content">
    <div>
      <div class="flex justify-center pb-10">
        <Button
          class="text-base text-textHover border border-textHover bg-white hover:bg-customHover w-36 rounded-ro"
        >
          <Plus class="mr-2 h-4 w-4" />創建作品</Button
        >
      </div>

      <nav class="grid text-sm text-muted-foreground justify-between">
        <Button
          id="btn"
          v-for="item in sidebarNavItems"
          :key="item.title"
          as="a"
          :href="item.href"
          variant="ghost"
          :class="
            cn(
              ' gap-3 rounded-none w-full text-left justify-start hover:bg-customHover  hover:text-textHover text-textColor text-base',
              $route.path === item.href &&
                'bg-customHover  border-l-2 border-textHover borderColor text-textHover '
            )
          "
        >
          <img src="@/assets/icons/object.svg"
               alt="object"
               class="icon" />
          {{ item.title }}
        </Button>
      </nav>
    </div>
    <div id="details"
         class="px-25 pb-19 gap-1">
      <div class="flex justify-center pb-5">
        <Button
          class="text-[#60A4A9] gap-2 border border-[#60A4A9] bg-white hover:bg-customHover w-36 rounded-ro"
        >
          <img
            src="@/assets/icons/download.svg"
            alt="download"
            class="w-4 h-4"
          />APP下載</Button
        >
      </div>
      <ProgressRoot
        v-bind="delegatedProps"
        :class="
          cn(
            'relative h-3 w-full overflow-hidden rounded-full bg-secondary',
            props.class
          )
        "
      >
        <ProgressIndicator
          class="h-full w-full flex-1 bg-[#60A4A9] transition-all"
          :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
        />
      </ProgressRoot>
      <div class="flex justify-between text-[#A7A7A7] text-base">
        <span>空間容量</span
        ><span class="flex"
        ><p class="text-[#60A4A9]">71.41G</p>
          <p class="text-[#A7A7A7]">/ 103G</p></span
        >
      </div>
    </div>
    <div class="button-content bg-[#EAF6F6]">
      <Button
        class="p-3 text-base text-textHover text-[#6d6d6d] bg-customHover w-full h-full gap-3 hover:bg-transparent"
      >
        <img
          src="@/assets/icons/logout.svg"
          alt="logout"
          class="icon"
        />登出</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-vue-next';
import { type HTMLAttributes, computed } from 'vue';
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'radix-vue';
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
    title: 'Pinia 和 Vueuse',
    href: '/forms/display',
  },
  {
    title: 'Tabs',
    href: '/forms/Profile',
  },
];
const props = withDefaults(
  defineProps<ProgressRootProps & { class?: HTMLAttributes['class'] }>(),
  {
    modelValue: 40,
  }
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>
<style scoped>
.icon {
  width: 22px;
  height: 22px;
}
#btn {
  padding: 14px 30px;
  width: 100vw;
  height: 100vh;
  max-width: 256px;
  max-height: 50px;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.button-content {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#details {
  margin-top: auto;
  padding: 0 25px 19px 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
