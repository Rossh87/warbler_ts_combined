// Helper func to eliminate need to specify constants for use as action types.  Helper uses typing 
// to extract the value of action.type from the return value of our action creator functions.
import { getType } from 'typesafe-actions';

// Get all action creators, and their union type.
import {
	populateMessages,
	deleteMessage,
	clearMessages,
	MessagesAction
} from './messagesActions';

import { AllMessages, IMessage } from './messagesTypes';

const filterDeletedMessage = (state: AllMessages, msgID: IMessage['_id']): AllMessages => {
	return(
		state.filter(msg => {
			return msg._id !== msgID;
		})
	);
};

const messagesReducer = (state: AllMessages = [], action: MessagesAction): AllMessages => {
	switch (action.type) {
		case getType(populateMessages):
			return [...action.payload];
			break;

		case getType(clearMessages):
			return [];
			break;

		case getType(deleteMessage):
			return filterDeletedMessage(state, action.payload);
		
		default:
			return state;
			break;
	}
};

export default messagesReducer;

