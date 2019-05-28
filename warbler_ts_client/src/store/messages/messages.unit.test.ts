// Get reducer for testing
import messagesReducer from './messagesReducer';

// Get actions creators
import {
	populateMessages,
	clearMessages,
	deleteMessage
} from './messagesActions';

// Types for test variables
import { AllMessages } from './messagesTypes';

let popState: AllMessages;
let emptyState: AllMessages;

beforeEach(() => {
    popState =  [
        {
         _id: '1',
         text: 'someString',
         createdAt: 'datestring',
         author: 'Ross Hunter'
        },
        {
        _id: '2',
        text: 'someString2',
        createdAt: 'datestring',
        author: 'Ross Hunterson'
        }
    ];

    emptyState = [];
});

describe('The messages reducer function', () => {
    it('populates state when hit w/ appropriate action', () => {
        const result = messagesReducer(
            emptyState,
            populateMessages(popState)    
        );

        expect(result).toEqual(popState);
    });

    it('clears all messages when hit with clear action', () => {
        const result = messagesReducer(
            popState,
            clearMessages()
        );

        expect(result).toEqual([]);
    });

    it('deletes correct message when passed an id for deletion',() => {
        const result = messagesReducer(
            popState,
            deleteMessage('1')
        );

        const expected = [
            {
                _id: '2',
                text: 'someString2',
                createdAt: 'datestring',
                author: 'Ross Hunterson'
            }
        ];

        expect(result).toEqual(expected);
    });
})