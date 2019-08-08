import errorReducer from "./errorReducer";

import { createErrorAction, clearErrorAction } from "./errorActions";

describe("The error reducer", () => {
    it("returns a populated error state when hit with appropriate action", () => {
        const expected = new Error("test error");

        const result = errorReducer(null, createErrorAction(expected));

        expect(result).toEqual(expected);
    });

    it("clears all errors when hit with appropriate action", () => {
        const stateError = new Error("existing error");
        const result = errorReducer(stateError, clearErrorAction());
        expect(result).toBe(null);
    });
});
