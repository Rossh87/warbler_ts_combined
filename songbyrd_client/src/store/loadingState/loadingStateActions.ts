import { createAction, ActionType } from "typesafe-actions";

import { TLoadingStateValues } from "./loadingStateTypes";

export const userLoadingAction = createAction(
    "user/UPDATE_LOADING_STATE",
    (action) => {
        return (loadingState: TLoadingStateValues) => action(loadingState);
    }
);

export const messagesLoadingAction = createAction(
    "messages/UPDATE_LOADING_STATE",
    (action) => {
        return (loadingState: TLoadingStateValues) => action(loadingState);
    }
);

const loadingStateActions = {
    messagesLoadingAction,
    userLoadingAction
};

export type TLoadingStateActions = ActionType<typeof loadingStateActions>;
