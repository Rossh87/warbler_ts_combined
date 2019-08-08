// Network request library for quality of life
import axios, { AxiosPromise } from "axios";

import { API_DEV_URL, API_PRODUCTION_URL } from "../CONSTANTS";

// Get types
import { IUserData } from "../store/user/userTypes";
import { TAllMessages } from "../store/messages/messagesTypes";

// configure axios to pass along our session cookies, which
// it does *not* do by default
axios.defaults.withCredentials = true;

const baseURL =
    process.env.NODE_ENV === "production" ? API_PRODUCTION_URL : API_DEV_URL;

export const buildURL = (path: string): string => API_DEV_URL + path;

export const requestUserData = (): AxiosPromise<IUserData> =>
    axios.get(buildURL("user"));

export const requestMessageData = (): AxiosPromise<TAllMessages> =>
    axios.get(buildURL("messages"));
