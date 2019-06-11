// Network request library for quality of life
import axios from 'axios';

// Get a type for dispatch function we'll pass in to hook
import {Dispatch} from 'redux';

// configure axios to pass along our session cookies, which
// it does *not* do by default
axios.defaults.withCredentials = true;

// Get action creators
import {populateMessages, clearMessages} from '../store/messages/messagesActions';
import {populateUser, depopulateUser} from '../store/user/userActions';
import { useEffect } from 'react';

// Request all messages from API server and dispatch response.  We'll wrap this logic
// in a hook later, since that part doesn't need to be unit tested
export const fetchAllMsgs = async (url: string, dispatchFn: Dispatch): Promise<void> => {
    try {
        const res = await axios.get(url);

        dispatchFn(populateMessages(res.data));
    }
    
    catch(err) {
        // TODO: ADD ERROR HANDLING TO UI AND REDUX STATE
        console.error(err);
    }
}

// Request authorized user data from API server
export const fetchUser = async (url: string, dispatchFn: Dispatch): Promise<void> => {
    try {
        const res = await axios.get(url);

        dispatchFn(populateUser(res.data));
    }

    catch(err) {
        // TODO: ADD ERROR HANDLING
        console.error(err)
    }
}

// Send content of a new message to API server for creation in database
export const createMessage = async (url:string, text: string): Promise<void> => {
    try {
        await axios.post(url, {text});
    }

    catch(err) {
        // TODO: ADD ERROR HANDLING
        console.error(err);
    }
}

// Log user out--empty redux store
export const signOut = (dispatch: Dispatch) => {
    dispatch(clearMessages());
    dispatch(depopulateUser());
}

// Now we wrap our network handlers in useEffect to make hooks
export const useFetchAllMsgs = (url: string, dispatch: Dispatch): void => {
    useEffect(() => {
        fetchAllMsgs(url, dispatch);
    }, [])
};

export const useFetchUser = (url: string, dispatch: Dispatch): void => {
    useEffect(() => {
        fetchUser(url, dispatch)
    }, []);
}



