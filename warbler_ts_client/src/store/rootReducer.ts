import {combineReducers} from 'redux';

// Helper function to create a state type for combined
// redux state 
import { StateType } from 'typesafe-actions';

import userReducer from './user/userReducer';
import messagesReducer from './messages/messagesReducer';

const rootReducer = combineReducers({
	user: userReducer,
	messages: messagesReducer 
});

export type RootState = StateType<typeof rootReducer>;
export default rootReducer;
