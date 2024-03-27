export const useFormsStore = defineStore('forms', {
	state: () => ({
		loginForm: {
			fields: {
				username: {
					icon: 'person',
					name: 'Username',
					type: 'text',
					value: '',
				},
				password: {
					icon: 'shield-slash',
					name: 'Password',
					type: 'password',
					value: '',
				},
			},
		},
		signupForm: {
			fields: {
				username: {
					icon: 'person',
					name: 'Username',
					type: 'text',
					value: '',
				},
				email: {
					icon: 'envelope',
					name: 'Email',
					type: 'text',
					value: '',
				},
				password: {
					icon: 'shield-slash',
					name: 'Password',
					type: 'password',
					value: '',
				},
				repeatPassword: {
					icon: 'shield-slash',
					name: 'Confirm password',
					type: 'password',
					value: '',
				},
			},
			terms: false,
		},
	}),
	actions: {
		signupValid() {
			const {fields} = this.signupForm;
			return fields.email.value && fields.username.value && fields.password.value === fields.repeatPassword.value;
		},
	},
});
