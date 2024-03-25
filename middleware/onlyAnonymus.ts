import {isAuthenticated} from '~/utils/auth';

export default defineNuxtRouteMiddleware(async () => {
	if (isAuthenticated()) {
		return navigateTo('/auth/login');
	}
});
