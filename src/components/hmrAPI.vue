<script setup>
// import { ref } from 'vue';
import { Button } from '@/components/ui/button';
defineProps({
  msg: String,
});

// const count = ref(0);
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div class="card">
    <!-- <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/hmrAPI.vue</code> to test HMR
    </p> -->
    <p>我是時間：<span id="timer"></span></p>

    <p id="text">hello!Mila~~~</p>
    <Button>Click me</Button>
  </div>

  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
