// Helper func to eliminate need to specify constants for use as action types.  Helper uses typing
// to extract the value of action.type from the return value of our action creator functions.
import { getType } from "typesafe-actions";

// Get all action creators, and their union type.
import {
    populateMessagesAction,
    deleteMessage,
    clearMessagesAction,
    TMessagesAction
} from "./messagesActions";

// Get needed types
import { TAllMessages, IMessage } from "./messagesTypes";
import { Reducer } from "redux";

const filterDeletedMessage = (
    state: TAllMessages,
    msgID: IMessage["_id"]
): TAllMessages => {
    return state.filter((msg) => {
        return msg._id !== msgID;
    });
};

const messagesReducer: Reducer<TAllMessages, TMessagesAction> = (
    state = [],
    action
): TAllMessages => {
    switch (action.type) {
        case getType(populateMessagesAction):
            return [...action.payload];
            break;

        case getType(clearMessagesAction):
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
