<template>
  <div class="space-y-6 h-screen">
    <header
      class="sticky top-0 flex h-16 items-center gap-4 justify-between border-b bg-background px-4 md:px-6"
    >
      <div>
        <img
          src="@/assets/icons/logo.svg"
          alt="Logo"
          class="icon col-start-1 col-end-3"
        />
      </div>
      <div class="col-end-7 col-span-2">
        <ToggleGroup type="single">
          <ToggleGroupItem value="a"
                           @click="toogleDarkMode">
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </ToggleGroupItem>
          <ToggleGroupItem value="b"
                           @click="ChangeTheme('theme-green')">
            綠色
          </ToggleGroupItem>
          <ToggleGroupItem value="c"
                           @click="ChangeTheme('theme-orange')">
            橘色
          </ToggleGroupItem>
          <ToggleGroupItem value="c"
                           @click="ChangeTheme('theme-zinc')">
            灰色
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </header>
    <div
      class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 h-full"
    >
      <aside
        class="hidden lg:flex bg-white flex h-full max-h-screen flex-col gap-2 w-64 pt-12 rounded-tl-none rounded-tr-[50px] rounded-b-none rounded-l-none"
      >
        <SidebarNav />
      </aside>
      <aside
        class="lg:hidden mt-auto flex flex-col items-center gap-4 px-2 sm:py-5"
      >
        <SidebarNav2 />
      </aside>

      <div class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-whitet">
        <div class="space-y-6">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarNav from '../components/SidebarNav.vue';
import SidebarNav2 from '../components/SidebarNav2.vue';
import { Separator } from '@/components/ui/separator';
import { onMounted } from 'vue';
import { CircleUser, Menu, Package2, Search } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import FormsLayout from '@/forms/layouts/FormsLayout.vue';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ref } from 'vue';
const isDark = ref(false);
function loadTheme () {
  const storedTheme = localStorage.getItem('theme');
  const body = document.querySelector('body');

  if (storedTheme) {
    body?.classList.add(storedTheme);
  }
}

onMounted(() => {
  loadTheme();
});

function toogleDarkMode () {
  const body = document.querySelector('body');

  isDark.value = !isDark.value; // 切换状态
  // console.log(isDark);
  if (isDark.value) {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

function ChangeTheme (theme: string): void {
  const body = document.querySelector('body');
  const isDark = body?.classList.contains('dark');

  body.className = '';
  if (isDark) body.classList.add('dark');
  body.classList.add(theme);

  localStorage.setItem('theme', theme);

  function loadTheme () {
    const storedTheme = localStorage.getItem('theme');
    const body = document.querySelector('body');

    if (storedTheme) {
      body?.classList.add(storedTheme);
    }
  }
  onMounted(() => {
    loadTheme();
  });
}
</script>
<style scoped>
.icon {
  width: 130px;
  height: 40px;
  color: aliceblue;
}
</style>
