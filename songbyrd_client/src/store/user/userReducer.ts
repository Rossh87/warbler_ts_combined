// Helper func to remove need to specify constants for use as action types.  Helper uses typing
// to extract the value of action.type from the return value of our action creator functions.
import { getType } from "typesafe-actions";

// Get other needed types
import { IUserState } from "./userTypes";
import { Reducer } from "redux";

// Get all relevant actions and their union type
import {
    populateUserAction,
    depopulateUserAction,
    activeSessionAction,
    checkForSessionAction,
    TUserAction
} from "./userActions";

const initState: IUserState = {
    _id: "",

    displayName: "",

    name: {
        familyName: "",
        givenName: ""
    },

    provider: "",

    photos: [],

    emails: [],

    messages: [],

    createdAt: "",

    updatedAt: "",

    sessionIsActive: false
};

const userReducer: Reducer<IUserState, TUserAction> = (
    state = initState,
    action: TUserAction
): IUserState => {
    switch (action.type) {
        case getType(populateUserAction):
            return { ...state, ...action.payload, sessionIsActive: true };
            break;

        case getType(depopulateUserAction):
            return { ...initState };
            break;

        case getType(activeSessionAction):
            return { ...state, sessionIsActive: action.payload };

        default:
            return state;
            break;
    }
};

export default userReducer;
