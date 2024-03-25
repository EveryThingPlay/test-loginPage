<script setup lang="ts">
import RightSide from '../components/layout/authLayout/rightSide.vue';
</script>

<template>
  <div class="w-full h-[100vh] grid grid-cols-2 bg-main">
    <div class="m-auto">
      <slot />
    </div>
    <RightSide />
  </div>
</template>
