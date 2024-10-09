<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <tr
    :class="
      cn(
        'rounded even:bg-customHover transition-colors hover:bg-customHover/50 data-[state=selected]:bg-muted',
        props.class,
      )
    "
  >
    <slot />
  </tr>
</template>
