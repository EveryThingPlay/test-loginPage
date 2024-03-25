<script setup lang="ts">

const formModel = ref({
	email: '',
	password: '',
});

definePageMeta({
	middleware: 'only-anonymus',
	layout: 'auth',
});
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-[25px]">
      <div class="flex flex-col gap-6 items-center">
        <div class="flex flex-col gap-[25px]">
          <h1 class="h-[38px] w-[477px] align-top">
            Login to your Account
          </h1>
          <div class="flex flex-row justify-between items-center px-3 w-full h-[25px]">
            <hr
              width="120px"
              class="border-separator"
            >
            <p class="text-[15px]/6 font-medium text-separator">
              with email
            </p>
            <hr
              width="120px"
              class="border-separator"
            >
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-[25px] w-[453px]">
          <div class="flex flex-col gap-2.5 w-full justify-center items-center">
            <UIInput
              v-model="formModel.email"
              icon="envelope"
              name="email"
              type="email"
              placeholder="Email"
              class="w-full"
            />
            <UIInput
              v-model="formModel.password"
              icon="shield-slash"
              type="password"
              placeholder="Password"
              class="w-full"
            />
          </div>
          <div class="flex flex-col w-full gap-5 items-center text-base/6">
            <UIButton class="w-full">
              LOG IN
            </UIButton>
            <p class="text-zinc-500">
              Don't have account?
              <NuxtLink
                to="signup"
                class="font-semibold text-secondary"
              >
                Create an account
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
