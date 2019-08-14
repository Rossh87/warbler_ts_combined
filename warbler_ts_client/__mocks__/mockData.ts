// Get types for mock data
import { INetMessages, INetUser } from "../src/utils/networkTypes";
import { IMessage } from "../src/store/messages/messagesTypes";
import { UserState } from "../src/store/user/userTypes";

// Helper to generate fake data
import faker from "faker";

export const mockMessages: INetMessages = [
    {
        text: "this is a message",
        author: "12344",
        _id: "123",
        createdAt: Date.now()
    },
    {
        text: "this is also another message",
        author: "qqmoren00b",
        _id: "123",
        createdAt: Date.now()
    }
];

export const mockUser: INetUser = {
    displayName: "someUser",

    name: {
        familyName: "Khan",
        givenName: "Genghis"
    },

    provider: "facebook",

    photos: [{ _id: "123", value: "photourl.com" }],

    emails: [{ _id: "123", value: "mail@mail.com" }],

    messages: ["123", "456"]
};

export const fakeStateMessage: IMessage = {
    _id: "123",

    text: "text",

    createdAt: Date.now().toString(),

    updatedAt: Date.now().toString(),

    author: {
        _id: "456",

        photos: [{ _id: "3z134", value: "http://someurl.com" }],

        createdAt: Date.now().toString(),

        updatedAt: Date.now().toString(),

        displayName: "internetName"
    }
};

export const fakeStateUser: UserState = {
    displayName: "someUser",

    provider: "facebook",

    name: {
        familyName: "ross",
        givenName: "hunter"
    },

    sessionIsActive: true,

    photos: [{ _id: "3z134", value: "http://someurl.com" }],

    emails: [{ _id: "456", value: "mail@mail.com" }],

    messages: ["123", "890"]
};

interface IMockConfig {
    genArray?: {
        returnIndex: number;

        length: number;
    };

    mockType: "stateUser" | "netUser" | "message";
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// Force return type of any to shut the compiler up in test files.
export const genMock = ({ mockType, genArray }: IMockConfig): any => {
    const hook = faker.random.uuid();

    const genStateUser = (): UserState => {
        return {
            displayName: faker.internet.userName(),

            provider: ["google", "facebook"][Math.round(Math.random())],

            name: {
                familyName: faker.name.lastName(),
                givenName: faker.name.firstName()
            },

            emails: [
                { _id: faker.random.uuid(), value: faker.internet.email() }
            ],

            messages: [faker.random.uuid()],

            photos: [
                { _id: faker.random.uuid(), value: faker.image.imageUrl() }
            ],

            sessionIsActive: true
        };
    };

    const genNetUser = (): Omit<UserState, "sessionIsActive"> => {
        return {
            displayName: faker.internet.userName(),

            provider: ["google", "facebook"][Math.round(Math.random())],

            name: {
                familyName: faker.name.lastName(),
                givenName: faker.name.firstName()
            },

            emails: [
                { _id: faker.random.uuid(), value: faker.internet.email() }
            ],

            messages: [faker.random.uuid()],

            photos: [
                { _id: faker.random.uuid(), value: faker.image.imageUrl() }
            ]
        };
    };

    const genMessage = (): IMessage => {
        return {
            _id: faker.random.uuid(),

            text: faker.lorem.sentences(4) + `${hook}`,

            createdAt: faker.date.past().toString(),

            updatedAt: faker.date.past().toString(),

            author: {
                _id: faker.random.uuid(),

                photos: [
                    { _id: faker.random.uuid(), value: faker.image.imageUrl() }
                ],

                createdAt: faker.date.past().toString(),

                updatedAt: faker.date.past().toString(),

                displayName: faker.internet.userName()
            }
        };
    };

    const selectedGenFn = (() => {
        switch (mockType) {
            case "netUser":
                return genNetUser;
            case "stateUser":
                return genStateUser;
            case "message":
                return genMessage;
            default:
                throw new Error("invalid type passed to mock factory");
        }
    })();

    if (genArray) {
        const mockArr = [];
        for (let i = 0; i < genArray.length; i++) {
            mockArr.push(selectedGenFn());
        }
        return { mockData: mockArr, hook };
    }

    return { mockData: selectedGenFn(), hook };
};
