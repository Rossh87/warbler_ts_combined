// The functions we'll be testing
import { requestUserData, requestMessageData, buildURL } from "./networkSvcs";

// Jest will automock this from the __mocks__ folder.  However, we don't need that
// more complicated mock for these tests, so we override *that* mock with another,
// simpler mock in the next lines.
import axios from "axios";

jest.mock("axios", () => {
    return {
        get: jest.fn(),
        // we add this property so the test doesn't error out,
        // since functions being tested set this property in their own modules
        defaults: {
            withCredentials: false
        }
    };
});

import { API_DEV_URL } from "../CONSTANTS";

describe("helper function to construct URL strings", () => {
    it("returns an accurate string", () => {
        const expected = `${API_DEV_URL}test`;
        expect(buildURL("test")).toEqual(expected);
    });
});

describe("function to request user data from API", () => {
    it("calls axios.get with the passed param string", () => {
        const result = requestUserData();
        expect(axios.get).toHaveBeenCalledWith(buildURL("user"));
    });
});

describe("function to request message data from API", () => {
    it("calls axios.get with passed param string", () => {
        const result = requestMessageData();
        expect(axios.get).toHaveBeenCalledWith(buildURL("messages"));
    });
});
