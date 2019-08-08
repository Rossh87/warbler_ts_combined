// Get reducer function to test
import userReducer from "./userReducer";

// Get action creators
import { populateUserAction, depopulateUserAction } from "./userActions";

// Get needed types
import { IUserState, IUserData } from "./userTypes";

let initState: IUserState, netUser: IUserData, stateUser: IUserState;

beforeEach(() => {
    initState = {
        _id: "",

        createdAt: "",

        updatedAt: "",

        displayName: "",

        name: {
            familyName: "",
            givenName: ""
        },

        provider: "",

        photos: [],

        emails: [],

        messages: [],

        isAuthorized: false
    };

    netUser = {
        messages: [],
        _id: "5d4b7ce56642ef603906ce27",
        displayName: "ross hunter",
        name: { familyName: "hunter", givenName: "ross" },
        emails: [
            {
                _id: "5d4b7ce56642ef603906ce28",
                value: "hunter.dev.87@gmail.com"
            }
        ],
        photos: [
            {
                _id: "5d4b7ce56642ef603906ce29",
                value:
                    "https://lh5.googleusercontent.com/-PkRkcx9j8P4/AAAAAAAAAAI/AAAAAAAAAAc/7IG7wURC9LQ/photo.jpg"
            }
        ],
        provider: "google",
        createdAt: "2019-08-08T01:37:41.394Z",
        updatedAt: "2019-08-08T01:37:41.394Z"
    };

    stateUser = Object.assign(netUser, { isAuthorized: true });
});

describe("The user data reducer function", () => {
    it("correctly populates user state when hit with populate action and payload data", () => {
        const result = userReducer(initState, populateUserAction(netUser));

        expect(result).toEqual(stateUser);
    });

    it("resets state to initial state when hit with reset action", () => {
        const result = userReducer(stateUser, depopulateUserAction());

        expect(result).toEqual(initState);
    });

    it("returns initial state when hit with unknown action type", () => {
        const result = userReducer(
            initState,
            // Cast a 'legitimate' type to soothe the typescript compiler
            { type: "mysteryType" as "user/DEPOPULATE_USER" }
        );

        expect(result).toEqual(initState);
    });
});
