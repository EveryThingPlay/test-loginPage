<script setup lang="ts">
import {ref, reactive} from 'vue';

const props = defineProps({
	default: {
		type: String,
		default: '',
	},

	digitCount: {
		type: Number,
		default: 5,
	},
});

const digits = reactive<Array<string|undefined>>([]);

if (props.default && props.default.length === props.digitCount) {
	for (let i = 0; i < props.digitCount; i++) {
		digits[i] = props.default.charAt(i);
	}
} else {
	for (let i = 0; i < props.digitCount; i++) {
		digits[i] = undefined;
	}
}

const otpCont = ref(null);

const handleKeyDown = function (event: KeyboardEvent, index: number) {
	if (!otpCont.value) {
		return;
	}

	if (event.key !== 'Tab'
        && event.key !== 'ArrowRight'
        && event.key !== 'ArrowLeft'
	) {
		event.preventDefault();
	}

	if (event.key === 'Backspace') {
		digits[index] = undefined;

		if (index !== 0) {
			(((otpCont.value as HTMLElement).children)[index - 1] as HTMLInputElement).focus();
		}

		return;
	}

	if ((/^([0-9])$/.test(event.key))) {
		digits[index] = event.key;

		if (index !== props.digitCount - 1) {
			(((otpCont.value as HTMLElement).children)[index + 1] as HTMLInputElement).focus();
		}
	}
};

</script>

<template>
  <div
    ref="otpCont"
    class="flex flex-row gap-5"
  >
    <input
      v-for="(el, ind) in digits"
      :key="el"
      v-model="digits[ind]"
      type="text"
      class="otpBox"
      :autofocus="ind === 0"
      placeholder="-"
      maxlength="1"
      @keydown="handleKeyDown($event, ind)"
    >
  </div>
</template>

<style scoped>
.otpBox {
	@apply
		text-2xl text-center
		cursor-pointer
		caret-transparent
		h-16 w-16
		flex flex-row gap-2.5 items-center
		bg-secondary bg-opacity-10
		rounded-[10px]
		outline outline-offset-[-2px] outline-2 outline-secondary/50
		placeholder:text-placeholder placeholder:text-[32px]
		hover:outline-secondary/75
		focus-within:outline-secondary/75 focus-within:bg-opacity-35
		px-2.5
		duration-100
}
</style>
