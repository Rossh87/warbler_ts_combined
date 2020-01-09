import { fetchMessages, addMessage } from "./messagesSaga";
import {
    populateMessagesAction,
    addMessageAction,
    createMessageAction
} from "./messagesActions";
import { buildURL } from "../../utils/networkSvcs";
import { runSaga } from "redux-saga";
import { createErrorAction } from "../error/errorActions";
import axios from "axios";
import { messagesLoadingAction } from "../loadingState/loadingStateActions";

jest.mock("axios", () => {
    return {
        defaults: {
            withCredentials: false
        },

        get: jest.fn((route) => {
            switch (route) {
                case "http://localhost:8001/api/messages":
                    return Promise.resolve({
                        data: [{ key1: "val1" }, { key2: "val2" }]
                    });

                default:
                    return new Error("test route not matched");
            }
        }),

        post: jest.fn((route, data) => {
            switch (route) {
                case "http://localhost:8001/api/messages":
                    return Promise.resolve({
                        data: {
                            _id: "1",
                            text: data.text,
                            author: "Tim Robbins"
                        }
                    });

                default:
                    return new Error("test route not matched");
            }
        })
    };
});

describe("fetchMessages", () => {
    it("calls api with correct url", async () => {
        const result = await runSaga(
            {
                dispatch: jest.fn(),
                getState: () => ({ state: "someVal" })
            },
            fetchMessages
        );

        expect(axios.get).toHaveBeenCalledWith(buildURL("messages"));
    });

    it("correctly synchronizes loading state of messages with dispatching of data", async () => {
        const dispatched: any = [];
        const result = await runSaga(
            {
                dispatch: jest.fn((action) => dispatched.push(action)),
                getState: () => ({ state: "someVal" })
            },
            fetchMessages
        );

        const [startLoadingMessages, data, clearLoadingMessages] = dispatched;

        expect(dispatched.length).toBe(3);

        expect(startLoadingMessages).toEqual(messagesLoadingAction("loading"));

        expect(data).toEqual(
            populateMessagesAction([{ key1: "val1" }, { key2: "val2" }] as any)
        );

        expect(clearLoadingMessages).toEqual(messagesLoadingAction("ready"));
    });
});

describe("addMessage", () => {
    it("calls api with correct url and dispatches the response data", async () => {
        const dispatched = [] as any;
        const testString = "test string";
        const result = await runSaga(
            {
                dispatch: jest.fn((action) => dispatched.push(action)),
                getState: () => ({ state: "someVal" })
            },
            addMessage,
            createMessageAction(testString)
        );

        expect(axios.post).toHaveBeenCalledWith(buildURL("messages"), {
            text: testString
        });
        expect(dispatched[0]).toEqual(
            addMessageAction({
                _id: "1",
                text: testString,
                author: "Tim Robbins"
            } as any)
        );
    });
});
