<script setup lang="ts">
defineProps({
	disabled: {type: Boolean, default: false},
});
</script>

<template>
  <button
    :disabled="disabled"
    class="UIButton"
  >
    <slot />
  </button>
</template>

<style>
.UIButton {
	@apply
	h-16 p-5
	bg-secondary
	text-white text-xl/6 font-semibold
	rounded-[10px]
	hover:opacity-95
	focus-visible:opacity-90 focus:outline-none active:opacity-100
	disabled:bg-separator disabled:hover:opacity-50 disabled:opacity-50
	duration-100
}
</style>
