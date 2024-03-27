<script setup lang="ts">

definePageMeta({
	middleware: 'only-anonymus',
	layout: 'auth',
});

const {signupForm} = storeToRefs(useFormsStore());

const isButtonActive = computed(() => {
	const {fields, terms} = signupForm.value;
	return terms && fields.username.value && /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email.value) && fields.password.value && fields.password.value === fields.repeatPassword.value;
});
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-[25px] items-center">
      <div class="flex flex-col">
        <h1 class="h-[38px] w-[477px] align-top">
          Create your account
        </h1>
        <p class="text-xl/6 text-separator w-full h-30px">
          Unlock all Features!
        </p>
      </div>
      <div class="flex flex-col justify-center items-center gap-[25px] w-[453px]">
        <div class="flex flex-col justify-center items-center w-full gap-2.5">
          <div class="flex flex-col gap-2.5 w-full justify-center items-center">
            <UIInput
              v-for="field of signupForm.fields"
              :key="field"
              v-model="field.value"
              :icon="field.icon"
              :type="field.type"
              :placeholder="field.name"
              class="w-full"
            />
          </div>
          <div class="flex flex-row self-start gap-2.5 items-center h-7 ">
            <UICheckbox
              id="agree-terms"
              v-model="signupForm.terms"
            />
            <label
              for="agree-terms"
              class="text-zinc-500 text-base/6 pt-1"
            >
              Accept <a
                href="/terms"
                class="text-secondary font-medium"
              >terms and conditions</a>
            </label>
          </div>
        </div>
        <div class="flex flex-col w-full gap-5 items-center text-base/6">
          <UIButton
            class="w-full"
            :disabled="!isButtonActive"
          >
            SIGN UP
          </UIButton>
          <p class="text-zinc-500">
            You have account?
            <NuxtLink
              to="login"
              class="font-semibold text-secondary"
            >
              Login now
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
