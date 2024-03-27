import type {User} from '~/types/user';

export const useUserStore = defineStore('user', {
	state: () => ({
		user: undefined as User | undefined,
	}),
	persist: {
		storage: persistedState.localStorage,
	},
	actions: {
		async auth() {
			await $fetch<User>('https://dummyjson.com/auth/login', {
				method: 'POST',
				body: {
					username: useFormsStore().loginForm.fields.username.value,
					password: useFormsStore().loginForm.fields.password.value,
				},
			}).then(response => {
				this.user = response;
			});
		},
		logout() {
			this.user = undefined;
			localStorage.removeItem('user');
		},
	},
});
