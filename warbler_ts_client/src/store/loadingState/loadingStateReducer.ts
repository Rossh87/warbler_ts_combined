import { getType } from "typesafe-actions";
import { Reducer } from "redux";
import {
    TLoadingStateActions,
    messagesLoadingAction,
    userLoadingAction
} from "./loadingStateActions";
import { ILoadingState, TLoadingStateValues } from "./loadingStateTypes";

// Initial state should have some value. After initial loading, these value will always
// be a boolean.
const initState = {
    user: "initial",
    messages: "initial"
};

const loadingStateReducer: Reducer<ILoadingState, TLoadingStateActions> = (
    state = initState as ILoadingState,
    action
) => {
    switch (action.type) {
        case getType(messagesLoadingAction):
            return {
                ...state,
                messages: action.payload
            };

        case getType(userLoadingAction):
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};

export default loadingStateReducer;
