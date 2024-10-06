<script setup lang="ts">
// import hmrAPI from '@/components/hmrAPI.vue';
import { Button } from '@/components/ui/button';
import IndexComponent from '@/components/IndexComponent.vue';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content:
      '\'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
];
const defaultValue = ['item-3']; //預設打開哪一個

function toogleDarkMode () {
  const body = document.querySelector('body');
  const isDark = body?.classList.contains('dark');
  isDark ? body.classList.remove('dark') : body.classList.add('dark');
}

function ChangeTheme (theme: string): void {
  const body = document.querySelector('body');
  const isDark = body?.classList.contains('dark');

  body.className = '';
  if (isDark) body.classList.add('dark');
  body.classList.add(theme);
}
</script>

<template>
  <div class="container py-8">
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <!-- <hmrAPI msg="Vite + Vue" /> -->
    <div class="my-8">
      <Button @click="toogleDarkMode">Toggle Dark Mode</Button>
      <Button @click="ChangeTheme('theme-green')"
              variant="outline"
      >Chang Theme Green</Button
      >
      <Button @click="ChangeTheme('theme-orange')"
              variant="outline"
      >Chang Theme Orange</Button
      >
      <Button @click="ChangeTheme('theme-zinc')"
              variant="secondary"
      >Chang Theme Zinc</Button
      >
      <Accordion
        type="multiple"
        class="w-full"
        collapsible
        :default-value="defaultValue"
      >
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>item 4</AccordionTrigger>
          <AccordionContent>
            <div class="text-green-600">I am item 4</div></AccordionContent
          ></AccordionItem
        >
      </Accordion>
      <IndexComponent />
    </div>
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
