import { fetchMessages } from "./messagesSaga";
import { populateMessagesAction } from "./messagesActions";
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
