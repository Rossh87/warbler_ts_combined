// Type of user prop (state) in redux store
export interface UserState {
	userName: string,
	profileImg: string,
	// Option to create a Date type to make this more specific
	createdAt: string,
	isAuthorized: boolean
}

