export interface IMessage {
    _id: string;
    text: string;
    // Option to create a more specific Date type here
    createdAt: string;
    updatedAt: string;
    author: IAuthorProp;
}

export interface IAuthorProp {
    _id: string;

    photos: { _id: string; value: string }[];

    createdAt: string;

    updatedAt: string;

    displayName: string;
}

export type TAllMessages = IMessage[];
