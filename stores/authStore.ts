export const useAuthStore = defineStore('auth', {
	state: () => ({
		loginForm: {
			email: undefined,
			password: undefined,
		},
		signupForm: {
			username: undefined,
			email: undefined,
			password: undefined,
			repeatPassword: undefined,
			terms: false,
		},
	}),
});
