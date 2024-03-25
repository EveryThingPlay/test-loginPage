<script setup lag="ts">
const props = defineProps({
	modelValue: {type: Boolean, default: false},
});

const model = ref(props.modelValue);
</script>

<template>
  <div>
    <input
      v-model="model"
      type="checkbox"
      class="h-5 w-5 border-2 opacity-0 m-0 p-0"
    >
    <img
      v-if="!model"
      src="/ui/checkbox.svg"
      class="mt-[-26px]"
    >
    <img
      v-else-if="model"
      src="/ui/checkbox-active.svg"
      class="mt-[-26px]"
    >
  </div>
</template>
