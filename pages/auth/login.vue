<script setup lang="ts">

const {loginForm} = storeToRefs(useFormsStore());
const {auth} = useUserStore();

definePageMeta({
	middleware: 'only-anonymus',
	layout: 'auth',
});

const isButtonActive = computed(() => loginForm.value.fields.username.value && loginForm.value.fields.password.value);

const error = ref(false);

async function handleAuth() {
	error.value = false;
	await auth().then(async () => {
		useFormsStore().$reset();
		navigateTo('/');
	}).catch(err => {
		error.value = true;
		console.error(err);
	});
}
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
              v-for="field in loginForm.fields"
              :key="field.name"
              v-model="field.value"
              :icon="field.icon"
              :type="field.type"
              :placeholder="field.name"
              class="w-full"
            />
          </div>
          <div class="flex flex-col w-full gap-5 items-center text-base/6">
            <UIButton
              :disabled="!isButtonActive"
              class="w-full"
              @click="handleAuth"
            >
              LOG IN
            </UIButton>
            <p
              v-if="error"
              class="text-red-400"
            >
              Username or password is incorrect
            </p>
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
