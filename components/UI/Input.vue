<script setup lang="ts">
defineProps({
	modelValue: {type: String, default: ''},
	icon: {type: String, default: undefined},
	name: {type: String, default: 'input'},
	type: {type: String as PropType<'text'|'password'|'email'>, default: 'text'},
	placeholder: {type: String, default: undefined},
});

const emits = defineEmits(['update:modelValue']);

const input = ref<HTMLInputElement>();

function focus() {
	input.value?.focus();
}

function togglePassword(v:boolean) {
	if (!input.value) {
		return;
	}

	input.value.type = v ? 'password' : 'text';
}

function handleInput(v: Event) {
	emits('update:modelValue', (v.target as HTMLInputElement).value);
}
</script>

<template>
  <div
    class="UIInput"
    @click="focus"
  >
    <img
      v-if="icon"
      :src="`/icons/${icon}.svg`"
    >
    <input
      ref="input"
      :value="modelValue"
      :type="type"
      :name="name"
      class="w-full h-6 bg-transparent focus:outline-none placeholder:text-placeholder placeholder:text-lg/6"
      :placeholder="placeholder"
      @input="handleInput($event)"
    >
    <img
      v-if="type=='password'"
      :src="`/icons/eye-slash.svg`"
      class="cursor-pointer mr-2.5"
      @mousedown="togglePassword(false)"
      @mouseup="togglePassword(true)"
    >
  </div>
</template>

<style scoped>
.UIInput {
	@apply
		text-lg/6
		cursor-text
		h-16
		flex flex-row gap-2.5 items-center
		bg-secondary bg-opacity-10
		rounded-[10px]
		outline outline-offset-[-2px] outline-2 outline-secondary/50
		hover:outline-secondary/75
		focus-within:outline-secondary/75 focus-within:bg-opacity-25 px-2.5
		duration-100
}
</style>
