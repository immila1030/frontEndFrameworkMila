<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <thead :class="cn('bg-theader rounded', props.class)">
    <slot />
  </thead>
</template>
