// Get types for mock data
import {INetMessages, INetUser} from '../src/utils/networkTypes';

export const mockMessages: INetMessages = [{
    text: 'this is a message',
    author: '12344',
    _id: '123',
    createdAt: Date.now()
}, {
    text: 'this is also another message',
    author: 'qqmoren00b',
    _id: '123',
    createdAt: Date.now()
}];

export const mockUser: INetUser = {
    displayName: 'someUser',

    name: {
        familyName: 'Khan',
        givenName: 'Genghis'
    },

    provider: 'facebook',

    photos: [{value: 'photourl.com'}],

    emails: [{value: 'mail@mail.com'}],

    messages: ['123', '456']
};