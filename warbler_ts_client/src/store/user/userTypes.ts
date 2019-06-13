// Type of user prop (state) in redux store
export interface UserState {
	displayName: string,

    name: {
        familyName: string,
        givenName: string
    },

    provider: string,

    photos: {_id: string, value: string} [],

    emails: {_id: string, value: string} [],

	messages: string [],
	
	isAuthorized: boolean
}


