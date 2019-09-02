// Get reducer for testing
import messagesReducer from "./messagesReducer";

// Get actions creators
import {
    populateMessagesAction,
    clearMessagesAction,
    deleteMessage,
    addMessageAction
} from "./messagesActions";

// Types for test variables
import { TAllMessages, IAuthorProp } from "./messagesTypes";

let popState: TAllMessages;
let emptyState: TAllMessages;

beforeEach(() => {
    popState = [
        {
            _id: "1",
            text: "someString",
            createdAt: "datestring",
            updatedAt: "datestring",
            author: <any>"Ross Hunter"
        },
        {
            _id: "2",
            text: "someString2",
            createdAt: "datestring",
            updatedAt: "datestring",
            author: <any>"Ross Hunterson"
        }
    ];

    emptyState = [];
});

describe("The messages reducer function", () => {
    it("populates state when hit w/ appropriate action", () => {
        const result = messagesReducer(
            emptyState,
            populateMessagesAction(popState)
        );

        expect(result).toEqual(popState);
    });

    it("clears all messages when hit with clear action", () => {
        const result = messagesReducer(popState, clearMessagesAction());

        expect(result).toEqual([]);
    });

    it("deletes correct message when passed an id for deletion", () => {
        const result = messagesReducer(popState, deleteMessage("1"));

        const expected = [popState[1]];

        expect(result).toEqual(expected);
    });

    it("adds a message when passed a message w/ addMessage action", () => {
        const newMessage = {
            _id: "3",
            text: "newString",
            createdAt: "datestring",
            updatedAt: "datestring",
            author: <any>"Tim Gunderson"
        };
        const result = messagesReducer(popState, addMessageAction(newMessage));

        expect(result[result.length - 1]).toEqual(newMessage);
    });
});
