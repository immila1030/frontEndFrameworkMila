<script setup lang="ts">
import UserAuthForm from './components/UserAuthForm.vue';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import avatarImage from '@/assets/avatar/avatar.jpg';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
const imageUrl = ref(avatarImage);
const { t, locale } = useI18n();
const switchLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en';
  console.log(locale.value);
};
</script>

<template>
  <div class="md:hidden">
    <VPImage
      alt="Authentication"
      width="1280"
      height="1214"
      class="block"
      :image="{
        dark: '/examples/authentication-dark.png',
        light: '/examples/authentication-light.png',
      }"
    />
  </div>

  <div
    class="flex flex-1 container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <div
      class="absolute right-4 top-4 md:right-8 md:top-8 flex items-center justify-center gap-2"
    >
      <Avatar class="w-8 h-8">
        <AvatarImage :src="imageUrl"
                     alt="@radix-vue" />
        <AvatarFallback>Mila</AvatarFallback>
      </Avatar>
      <p class="text-xs">Mila專案作品</p>
      <Button
        class="w-10 h-6 text-xs text-[#60A4A9] border border-[#60A4A9] bg-white hover:bg-bgHover hover:text-white hover:border-bgHover rounded-ro"
        @click="switchLanguage"
      >
        <p>{{ locale === 'en' ? '中文' : '英文' }}</p>
      </Button>
    </div>

    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
    >
      <div class="absolute inset-0 bg-[#B3D9DF]" />
      <div class="relative z-20 flex items-center text-lg font-medium">
        <img src="@/assets/image/LOGO2.png"
             alt="LOGO"
             class="w-20 h-20" />
      </div>
      <div class="relative z-20 mt-auto text-[#015C61]">
        <blockquote class="space-y-2">
          <p class="text-lg">
            &ldquo;歡迎使用 全屋記 全面啟動 你的生意記憶點&rdquo;
          </p>
          <footer class="text-">秦創科技有限公司</footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div
        class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
      >
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            {{ t('create') }}
          </h1>
          <p class="text-sm text-muted-foreground">
            {{ t('account') }}
          </p>
        </div>
        <UserAuthForm />
        <p class="px-8 text-center text-sm text-muted-foreground">
          {{ t('agree') }}
          <a
            href="/terms"
            class="underline underline-offset-4 hover:text-primary"
          >
            {{ t('terms') }}
          </a>
          {{ t('and') }}
          <a
            href="/privacy"
            class="underline underline-offset-4 hover:text-primary"
          >
            {{ t('Privacy') }}
          </a>
          。
        </p>
      </div>
    </div>
  </div>
</template>
