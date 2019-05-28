// Network request library for quality of life
import axios from 'axios';

// Get a type for dispatch function we'll pass in to hook
import {Dispatch} from 'redux';

// configure axios to pass along our session cookies, which
// it does *not* do by default
axios.defaults.withCredentials = true;

// Get action creators
import {populateMessages} from '../store/messages/messagesActions';

// Export this function for testing--this is where the logic resides
export const fetchAllMsgs = async (url: string, dispatchFn: Dispatch) => {
    try {
        const res = await axios.get(url);

        dispatchFn(populateMessages(res.data));
    }
    
    catch(err) {
        // TODO: ADD ERROR HANDLING TO UI AND REDUX STATE
        console.error(err);
    }
}