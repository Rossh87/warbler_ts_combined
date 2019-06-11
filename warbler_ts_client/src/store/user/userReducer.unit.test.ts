// Get reducer function to test
import userReducer from './userReducer';

// Get action creators
import {populateUser, depopulateUser} from './userActions';

// Get neeed types
import {UserState} from './userTypes';

let initState: UserState, popState: UserState;

beforeEach(() => {
    initState = {
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

    popState = {
        displayName: 'someUser',

        name: {
            familyName: 'Khan',
            givenName: 'Genghis'
        },

        provider: 'facebook',

        photos: [{value: 'photourl.com'}],

        emails: [{value: 'mail@mail.com'}],

        messages: ['123', '456'],

        isAuthorized: false
    }
});

describe('The user data reducer function', () => {
   it('correctly populates user state when hit with populate action and payload data', () => {
       const result = userReducer(
           initState,
           populateUser(popState)
       );

       expect(result).toEqual(popState);
   });

   it('resets state to initial state when hit with reset action', () => {
       const result = userReducer(
           popState,
           depopulateUser()
       );

       expect(result).toEqual(initState);
   });

   it('returns initial state when hit with unkown action type', () => {
       const result = userReducer(
           initState,
            // Cast a 'fake' type to soothe the typescript compiler
           {type: 'mysteryType' as 'user/DEPOPULATE_USER'} 
       );

       expect(result).toEqual(initState);
   })
});
