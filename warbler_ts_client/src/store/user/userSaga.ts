import { getType } from "typesafe-actions";

// bring in action creators
import { fetchUserAction, populateUserAction } from "./userActions";
import { createErrorAction, clearErrorAction } from "../error/errorActions";

// Get network utils
import { requestUserData } from "../../utils/networkSvcs";

// Types
import { call, put, takeLatest } from "redux-saga/effects";

const fetchUser = function*() {
    try {
        const userData = yield call(requestUserData);
        yield put(populateUserAction(userData));
    } catch (err) {
        yield put(createErrorAction(err));
    }
};

const userSaga = function*() {
    yield takeLatest(getType(fetchUserAction), fetchUser);
};

export default userSaga;
