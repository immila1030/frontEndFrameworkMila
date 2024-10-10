<template>
  <div
    id="backStage-wrap"
    class="overflow-hidden rounded-[0.5rem] border bg-background shadow"
  >
    <router-view />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#backStage-wrap {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
