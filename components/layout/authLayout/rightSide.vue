<template>
  <div class="w-full h-full bg-primary flex flex-col justify-center items-center text-white">
    <div>
      <img
        src="/images/auth/background.svg"
      >
      <img
        :src="`/images/auth/${(useRoute().name as string).split('auth-')[1]}.svg`"
        class="my-[-600px]"
      >
    </div>
    <div class="flex flex-col justify-center items-center">
      <p class="font-semibold text-xl/6 text-light h-[25px]">
        {{ /* @ts-ignore */
          messages.primary[useRoute().name] ?? ''
        }}
      </p>
      <p class="font-normal opacity-75 text-base text-light">
        {{ /* @ts-ignore */
          messages.secondary[useRoute().name] ?? ''
        }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>

// Сюда прям просится I18n
const messages = {
	primary: {
		'auth-login': 'Connect with any device.',
		'auth-signup': 'Join us!',
		'auth-otp': 'It\'s just OTP verification',
	},
	secondary: {
		'auth-login': 'Everything you need is an internet connection.',
		'auth-signup': 'Just go through the boring process of creating an account.',
		'auth-otp': 'You are one step away from recovering your password.',
	},
};
</script>
