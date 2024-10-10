
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui//button';
import { Input } from '@/components/ui//input';
import { Label } from '@/components/ui//label';
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); 
const email = ref('');
const emailError = ref(''); 
const isLoading = ref(false);
const router = useRouter();
function validateEmail (email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return emailPattern.test(email);
}

async function onSubmit (event: Event) {
  event.preventDefault();
  emailError.value = ''; 
  if (!validateEmail(email.value)) {
    emailError.value =  t('emailError');
    return;
  }
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    localStorage.setItem('userToken', 'yourTokenValue');
    router.push('/forms/account');
  }, 1000);
}
</script>
<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only"
                 for="email">
            {{ t('account') }}
          </Label>
          <Input
            v-model="email"
            id="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
          <p v-if="emailError"
             class="text-red-500 text-sm">{{ emailError }}</p>
        </div>
        <Button class="bg-[#015C61] text-white hover:bg-bgHover"
                :disabled="isLoading">
          {{ t('sign') }}
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          {{ t('continue') }}
        </span>
      </div>
    </div>
    <Button variant="outline"
            type="button"
            :disabled="isLoading">
      GOOGLE
    </Button>
  </div>
</template>
