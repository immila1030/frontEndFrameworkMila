<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <td
    :class="cn('px-3 py-4 align-middle [&:has([role=checkbox])]:pr-0', props.class)"
  >
    <slot />
  </td>
</template>
