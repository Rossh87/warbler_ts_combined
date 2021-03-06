// Helper functions to reduce boilerplate and obviate constants as action.type
import { createAction, ActionType } from "typesafe-actions";

import { IMessage, TAllMessages } from "./messagesTypes";

// Fetching actions
export const fetchMessagesAction = createAction(
    "messages/FETCH_MESSAGES",
    (action) => {
        return () => action();
    }
);

export const populateMessagesAction = createAction(
    "messages/POPULATE_MESSAGES",
    (action) => {
        return (messages: TAllMessages) => action(messages);
    }
);

// Deleting/clearing actions
export const clearMessagesAction = createAction("messages/CLEAR_MESSAGES");

export const deleteMessage = createAction(
    "messages/DELETE_MESSAGE",
    (action) => {
        return (messageID: IMessage["_id"]) => action(messageID);
    }
);

// Actions to add one or more messages
export const createMessageAction = createAction(
    "messages/CREATE_MESSAGE",
    (action) => {
        return (msgText: string) => action(msgText);
    }
);

export const addMessageAction = createAction(
    "messages/ADD_MESSAGE",
    (action) => {
        return (message: IMessage) => action(message);
    }
);

// Union type for user actions generated by helper utility.  Reducer uses this to
// correctly type its 'action' parameter.
const messagesActions = {
    populateMessagesAction,
    clearMessagesAction,
    deleteMessage,
    addMessageAction,
    createMessageAction
};

export type TMessagesAction = ActionType<typeof messagesActions>;
