import { runSaga } from "redux-saga";
import { fetchUser, checkForSession } from "./userSaga";
import axios from "axios";
import { buildURL } from "../../utils/networkSvcs";
import { populateUserAction, activeSessionAction } from "./userActions";
import { userLoadingAction } from "../loadingState/loadingStateActions";
import { debug } from "util";

jest.mock("axios", () => {
    // model the axios response object, which keeps the actual response JSON
    // on a 'data' property
    return {
        defaults: {
            withCredentials: false
        },

        get: jest.fn((route) => {
            switch (route) {
                case "http://localhost:8001/api/user":
                    return Promise.resolve({
                        data: {
                            user: "someData"
                        }
                    });

                case "http://localhost:8001/api/sessionStatus":
                    return Promise.resolve({
                        data: {
                            sessionIsActive: true
                        }
                    });

                default:
                    return new Error("test route not matched");
            }
        })
    };
});

describe("fetchUser", () => {
    it("calls api with correct url", async () => {
        const result = await runSaga(
            {
                dispatch: jest.fn(),
                getState: () => ({ state: "someVal" })
            },
            fetchUser
        );

        expect(axios.get).toHaveBeenCalledWith(buildURL("user"));
    });

    it("correctly synchronizes loading state of user with dispatching of data", async () => {
        const dispatched: any = [];
        const result = await runSaga(
            {
                dispatch: jest.fn((action) => {
                    dispatched.push(action);
                }),
                getState: () => ({ state: "someVal" })
            },
            fetchUser
        );
        const [startLoadingUser, data, clearLoadingUser] = dispatched;

        expect(dispatched.length).toBe(3);

        expect(startLoadingUser).toEqual(userLoadingAction("loading"));

        expect(data).toEqual(
            populateUserAction({
                user: "someData"
            } as any)
        );

        expect(clearLoadingUser).toEqual(userLoadingAction("ready"));
    });
});

describe("checkForSession", () => {
    it("calls api with correct url", async () => {
        const result = await runSaga(
            {
                dispatch: jest.fn(),
                getState: () => ({ state: "someVal" })
            },
            checkForSession
        );

        expect(axios.get).toHaveBeenCalledWith(buildURL("sessionStatus"));
    });

    it("dispatches correct actions with correct data", async () => {
        const dispatched: any = [];
        const result = await runSaga(
            {
                dispatch: jest.fn((action) => dispatched.push(action)),
                getState: () => ({ state: "someVal" })
            },
            checkForSession
        );

        expect(dispatched[0]).toEqual(activeSessionAction(true));
    });
});
