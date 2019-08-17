import { getType } from "typesafe-actions";
import loadingStateReducer from "./loadingStateReducer";
import { ILoadingState } from "./loadingStateTypes";
import {
    userLoadingAction,
    messagesLoadingAction
} from "./loadingStateActions";

let initState: ILoadingState;

beforeEach(() => {
    initState = {
        user: "initial",
        messages: "initial"
    };
});

describe("the loading state reducer", () => {
    it("sets the loading state of the correct data type", () => {
        const expectedUserState: ILoadingState = {
            user: "ready",
            messages: "initial"
        };

        const userAction = userLoadingAction("ready");
        const userResult = loadingStateReducer(initState, userAction);

        expect(userResult).toEqual(expectedUserState);

        const expectedMessagesState: ILoadingState = {
            user: "initial",
            messages: "ready"
        };

        const messagesAction = messagesLoadingAction("ready");

        const messagesResult = loadingStateReducer(initState, messagesAction);

        expect(messagesResult).toEqual(expectedMessagesState);
    });
});
