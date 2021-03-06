// Get helpers for typing redux action creators
import { createAction, ActionType } from "typesafe-actions";

export const createErrorAction = createAction(
    "error/CREATE_ERROR",
    (action) => {
        return (error: Error) => action(error);
    }
);

export const clearErrorAction = createAction("error/CLEAR_ERROR", (action) => {
    return () => action();
});

const errorActions = {
    createErrorAction,
    clearErrorAction
};

// Union type for user actions generated by helper utility.  Reducer uses this to
// correctly type its 'action' parameter.
export type TErrorAction = ActionType<typeof errorActions>;
