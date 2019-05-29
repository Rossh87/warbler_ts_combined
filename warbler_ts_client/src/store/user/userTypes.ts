// Type of user prop (state) in redux store
export interface UserState {
	displayName: string,

    name: {
        familyName: string,
        givenName: string
    },

    provider: string,

    photos: {value: string} [],

    emails: {value: string} [],

	messages: string [],
	
	isAuthorized: boolean
}


