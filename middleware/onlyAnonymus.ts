export default defineNuxtRouteMiddleware(async () => {
	if (useUserStore().user) {
		return navigateTo('/');
	}
});
