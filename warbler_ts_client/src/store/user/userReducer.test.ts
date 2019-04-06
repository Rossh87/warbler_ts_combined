// Get reducer function to test
import userReducer from './userReducer';

// Get action creators
import {populateUser, depopulateUser} from './userActions';

// Get neeed types
import {UserState} from './userTypes';

let initState: UserState, popState: UserState;

beforeEach(() => {
    initState = {
        userName: '',
        profileImg: '',
        // Option to create a Date type to make this more specific
        createdAt: '',
        isAuthorized: false
    }

    popState = {
        userName: 'Ross',
        profileImg: 'someurl.com',
        // Option to create a Date type to make this more specific
        createdAt: '1234',
        isAuthorized: true
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
