import {fetchAllMsgs, fetchUser} from './networkSvcs';

// Jest automocks this by default
import axios from 'axios';

// Get mock data shapes to assert on
import {mockMessages, mockUser} from '../../__mocks__/mockData';

// Get action creator.  Xform mock data into action to assert against
import { populateMessages } from '../store/messages/messagesActions';
import {populateUser} from '../store/user/userActions';

// Mock the dispatch function that we'll pass in as a param to the hook
let dispatch = jest.fn();

afterEach(() => {jest.clearAllMocks()});

describe('The function for fetching message data from API server', () => {
    it('makes a get request to the correct URL', async () => {

        await fetchAllMsgs('api/messages', dispatch);

        expect(axios.get).toHaveBeenCalledWith('api/messages');
    });

    it('dispatches the response data with the correct action', async () => {
        const mockAction = populateMessages(mockMessages);

        await fetchAllMsgs('api/messages', dispatch);

        expect(dispatch).toHaveBeenCalledWith(mockAction);
    })
});

describe('The function for fetching user data from API server', () => {
    it('makes a get request to the correct url', async () => {

        await fetchUser('api/user', dispatch);

        expect(axios.get).toHaveBeenCalledWith('api/user');
    });

    it('dispatches the response data with the correct action', async () => {
        const mockAction = populateUser(mockUser);

        await fetchUser('api/user', dispatch);

        expect(dispatch).toHaveBeenCalledWith(mockAction);
    })
})