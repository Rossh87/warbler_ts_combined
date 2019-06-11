// Helper func to remove need to specify constants for use as action types.  Helper uses typing 
// to extract the value of action.type from the return value of our action creator functions.
import { getType } from 'typesafe-actions';

import { UserState } from './userTypes';

// Get all relevant actions and their union type
import { populateUser, depopulateUser, UserAction } from './userActions';

const initState: UserState = {
	displayName: '',

    name: {
        familyName: '',
        givenName: ''
    },

    provider: '',

    photos: [],

    emails: [],

	messages: [],
	
	isAuthorized: false
}

const userReducer = (state = initState, action: UserAction): UserState => {
	switch (action.type) {
		case getType(populateUser):
			return {...state, ...action.payload, isAuthorized: true}
			break;

		case getType(depopulateUser):
			return {...initState}
			break;
		
		default:
			return state;
			break;
	}
}

export default userReducer;