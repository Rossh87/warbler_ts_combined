// Network request library for quality of life
import axios, { AxiosPromise } from "axios";

import { API_URL } from "../CONSTANTS";

// Get types
import { IUserData } from "../store/user/userTypes";
import { TAllMessages } from "../store/messages/messagesTypes";

// configure axios to pass along our session cookies, which
// it does *not* do by default
axios.defaults.withCredentials = true;

export const buildURL = (path: string): string => API_URL + path;

export const requestUserData = (): AxiosPromise<IUserData> =>
    axios.get(buildURL("user"));

export const requestMessageData = (): AxiosPromise<TAllMessages> =>
    axios.get(buildURL("messages"));
