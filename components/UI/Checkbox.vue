<script setup lag="ts">
const props = defineProps({
	modelValue: {type: Boolean, default: false},
});

const emits = defineEmits(['update:modelValue']);

function handleChange() {
	emits('update:modelValue', !props.modelValue);
}
</script>

<template>
  <div>
    <input
      :value="modelValue"
      type="checkbox"
      class="h-5 w-5 border-2 opacity-0 m-0 p-0"
      @input="handleChange"
    >
    <img
      v-if="!modelValue"
      src="/ui/checkbox.svg"
      class="mt-[-26px]"
    >
    <img
      v-else-if="modelValue"
      src="/ui/checkbox-active.svg"
      class="mt-[-26px]"
    >
  </div>
</template>
