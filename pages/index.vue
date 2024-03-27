<script setup>

definePageMeta({
	middleware: 'only-authorized',
});

function handleLogout() {
	useUserStore().$reset();
	navigateTo('/auth/login');
}
</script>

<template>
  <div>
    You are now logged in as {{ useUserStore().user.username }}
    <UIButton @click="handleLogout">
      Logout
    </UIButton>
  </div>
</template>
