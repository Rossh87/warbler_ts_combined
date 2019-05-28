// Here we define types for data received from API server

export interface INetUser {
    displayName: string,

    name: {
        familyName: string,
        givenName: string
    },

    provider: string,

    photos: {value: string} [],

    emails: {value: string} [],

    messages: string []
};

export interface INetMessage {
    _id: string,
    text: string,
    author: string,
    createdAt: number
};

export type INetMessages = INetMessage [];

