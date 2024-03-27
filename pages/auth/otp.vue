<script setup lang="ts">
definePageMeta({
	middleware: 'only-anonymus',
	layout: 'auth',
});

const otpModel = ref('');
const isButtonEnabled = computed(() => otpModel.value.length === 6);
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-[32px] items-center">
      <div class="flex flex-col">
        <h1 class="h-[38px] w-[477px] align-top">
          Enter OTP
        </h1>
        <div class="flex flex-col">
          <NuxtLink
            to="signup"
            class="text-base/6 text-secondary font-bold"
          >
            Change email
          </NuxtLink>
          <span class="text-xl/6 text-separator w-full h-30px">
            Sent OTP on
            <span class="text-secondary font-semibold">
              johndoe@gmail.com
            </span>
          </span>
        </div>
      </div>
      <div class="flex flex-col gap-6 justify-center items-center">
        <UI-OTP
          v-model="otpModel"
          digit-count="6"
          class="grow-0 shrink-0"
        />
        <UI-Button
          class="w-[453px]"
          :disabled="!isButtonEnabled"
        >
          SUBMIT
        </UI-Button>
      </div>
    </div>
  </NuxtLayout>
</template>
