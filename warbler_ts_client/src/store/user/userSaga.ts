import { getType } from "typesafe-actions";

// bring in action creators
import {
    fetchUserAction,
    populateUserAction,
    checkForSessionAction,
    activeSessionAction
} from "./userActions";
import { createErrorAction } from "../error/errorActions";

// Get network utils
import { requestUserData, requestSessionStatus } from "../../utils/networkSvcs";

// Types
import { call, put, takeLatest } from "redux-saga/effects";

// Note that we have to grab the 'data' property off the resolved promise from requestUserData,
// since it represents a response from the 'axios' library.
export const fetchUser = function*() {
    try {
        const userData = yield call(requestUserData);
        yield put(populateUserAction(userData.data));
    } catch (err) {
        yield put(createErrorAction(err));
    }
};

export const checkForSession = function*() {
    try {
        const sessionStatus = yield call(requestSessionStatus);
        yield put(activeSessionAction(sessionStatus.data.sessionIsActive));
    } catch (err) {
        yield put(createErrorAction(err));
    }
};

const userSaga = function*() {
    yield takeLatest(getType(fetchUserAction), fetchUser);
    yield takeLatest(getType(checkForSessionAction), checkForSession);
};

export default userSaga;
