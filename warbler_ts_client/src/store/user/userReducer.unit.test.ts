// Get reducer function to test
import userReducer from './userReducer';

// Get action creators
import {populateUser, depopulateUser} from './userActions';

// Get needed types
import {UserState} from './userTypes';
import {INetUser} from '../../utils/networkTypes'

// mock data factory
import {genMock} from '../../../__mocks__/mockData';

let initState: UserState,
    netUser: INetUser,
    stateUser: UserState

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

    netUser = genMock({mockType: 'netUser'}).mockData;

    stateUser = Object.assign(netUser, {isAuthorized: true});
});

describe('The user data reducer function', () => {
   it('correctly populates user state when hit with populate action and payload data', () => {
        const result = userReducer(
           initState,
           populateUser(netUser)
        );

        expect(result).toEqual(stateUser);
   });

   it('resets state to initial state when hit with reset action', () => {
       const result = userReducer(
           stateUser,
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
