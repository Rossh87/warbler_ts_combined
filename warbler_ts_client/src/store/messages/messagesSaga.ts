// Helper to extract 'type' property (aka: a string) from an action creator function
import { getType } from "typesafe-actions";

// Saga effects
import { takeLatest, call, put, all } from "redux-saga/effects";

// Get network utils
import {
    requestMessageData,
    requestMessageCreation
} from "../../utils/networkSvcs";

// Action creators.  These merely generate plain actions.
import {
    populateMessagesAction,
    fetchMessagesAction,
    createMessageAction,
    addMessageAction
} from "./messagesActions";
import { createErrorAction } from "../error/errorActions";
import { messagesLoadingAction } from "../loadingState/loadingStateActions";

// Note that we have to grab the 'data' property off the resolved promise from requestUserData,
// since it represents a response from the 'axios' library.
export const fetchMessages = function*() {
    try {
        yield put(messagesLoadingAction("loading"));
        const messages = yield call(requestMessageData);
        yield put(populateMessagesAction(messages.data));
        yield put(messagesLoadingAction("ready"));
    } catch (err) {
        yield put(createErrorAction(err));
    }
};

export const addMessage = function*(action: any) {
    try {
        const newMessage = yield call(requestMessageCreation, action.payload);
        yield put(addMessageAction(newMessage.data));
    } catch (err) {
        yield put(createErrorAction(err));
    }
};

const messagesSaga = function*() {
    yield all([
        takeLatest(getType(fetchMessagesAction), fetchMessages),
        takeLatest(getType(createMessageAction), addMessage)
    ]);
};

export default messagesSaga;
