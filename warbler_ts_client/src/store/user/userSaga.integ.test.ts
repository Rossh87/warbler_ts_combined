import { runSaga } from "redux-saga";
import { fetchUser, checkForSession } from "./userSaga";
import axios from "axios";
import { buildURL } from "../../utils/networkSvcs";
import { populateUserAction, activeSessionAction } from "./userActions";

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

    it("dispatches correct actions with response data", async () => {
        const dispatched: any = [];
        const result = await runSaga(
            {
                dispatch: jest.fn((action) => dispatched.push(action)),
                getState: () => ({ state: "someVal" })
            },
            fetchUser
        );

        expect(dispatched[0]).toEqual(
            populateUserAction({
                user: "someData"
            } as any)
        );
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
