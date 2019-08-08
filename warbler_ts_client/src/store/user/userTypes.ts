// Type of user prop (state) in redux store
export interface IUserData {
    _id: string;

    displayName: string;

    name: {
        familyName: string;
        givenName: string;
    };

    provider: string;

    photos: { _id: string; value: string }[];

    emails: { _id: string; value: string }[];

    messages: string[];

    createdAt: string;

    updatedAt: string;
}

export interface IUserState extends IUserData {
    isAuthorized: boolean;
}
