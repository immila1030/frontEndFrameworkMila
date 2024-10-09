<script setup>
import { computed } from "vue";
import { PaginationEllipsis } from "radix-vue";
import { MoreHorizontal } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationEllipsis
    v-bind="delegatedProps"
    :class="cn('rounded-ro w-9 h-9 flex items-center justify-center  bg-white text-black ring-transparent hover:bg-bgHover hover:text-white', props.class)"
  >
    <slot>
      <MoreHorizontal />
    </slot>
  </PaginationEllipsis>
</template>
