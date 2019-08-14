// Helper to extract 'type' property (aka: a string) from an action creator function
import { getType } from "typesafe-actions";

// Saga effects
import { takeLatest, call, put } from "redux-saga/effects";

// Get network utils
import { requestMessageData } from "../../utils/networkSvcs";

// Action creators.  These merely generate plain actions.
import { populateMessagesAction, fetchMessagesAction } from "./messagesActions";
import { createErrorAction, clearErrorAction } from "../error/errorActions";

// Note that we have to grab the 'data' property off the resolved promise from requestUserData,
// since it represents a response from the 'axios' library.
export const fetchMessages = function*() {
    try {
        const messages = yield call(requestMessageData);
        yield put(populateMessagesAction(messages.data));
    } catch (err) {
        yield put(createErrorAction(err));
    }
};

const messagesSaga = function*() {
    yield takeLatest(getType(fetchMessagesAction), fetchMessages);
};

export default messagesSaga;
