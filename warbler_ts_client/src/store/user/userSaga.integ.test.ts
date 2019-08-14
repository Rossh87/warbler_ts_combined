import { runSaga } from "redux-saga";
import { fetchUser } from "./userSaga";
import axios from "axios";
import { buildURL } from "../../utils/networkSvcs";
import { populateUserAction } from "./userActions";
import { IUserData } from "./userTypes";

jest.mock("axios", () => {
    // model the axios response object, which keeps the actual response JSON
    // on a 'data' property
    const fakeResData = {
        data: { prop1: "someData" }
    };

    return {
        defaults: {
            withCredentials: false
        },

        get: jest.fn(() => Promise.resolve(fakeResData))
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

    it("dispatches correct actions with correct data", async () => {
        const dispatched: any = [];
        const result = await runSaga(
            {
                dispatch: jest.fn((action) => dispatched.push(action)),
                getState: () => ({ state: "someVal" })
            },
            fetchUser
        );

        expect(dispatched[0]).toEqual(
            populateUserAction({ prop1: "someData" } as any)
        );
    });
});
