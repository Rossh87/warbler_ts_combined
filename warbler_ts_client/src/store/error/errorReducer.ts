// Get needed types
import { Reducer } from "redux";
import { IErrorState } from "./errorTypes";

// Helper func to remove need to specify constants for use as action types.  Helper uses typing
// to extract the value of action.type from the return value of our action creator functions.
import { getType } from "typesafe-actions";

// Get error action creators & relevant type
import {
    createErrorAction,
    clearErrorAction,
    TErrorAction
} from "./errorActions";

const errorReducer: Reducer<IErrorState | null, TErrorAction> = (
    state = null,
    action
) => {
    switch (action.type) {
        case getType(createErrorAction):
            return action.payload;
            break;
        case getType(clearErrorAction):
            return null;
            break;
        default:
            return state;
    }
};

export default errorReducer;
