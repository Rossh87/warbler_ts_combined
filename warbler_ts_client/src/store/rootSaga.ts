import { all } from "redux-saga/effects";

import userSaga from "./user/userSaga";
import messagesSaga from "./messages/messagesSaga";

const rootSaga = function*() {
    yield all([userSaga(), messagesSaga()]);
};

export default rootSaga;
