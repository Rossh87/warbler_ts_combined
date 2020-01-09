import { combineReducers } from "redux";

// Helper function to create a state type for combined
// redux state
import { StateType } from "typesafe-actions";

// Get reducers
import userReducer from "./user/userReducer";
import messagesReducer from "./messages/messagesReducer";
import errorReducer from "./error/errorReducer";
import loadingStateReducer from "./loadingState/loadingStateReducer";

const rootReducer = combineReducers({
    user: userReducer,
    messages: messagesReducer,
    error: errorReducer,
    loadingState: loadingStateReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
