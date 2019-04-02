import {combineReducers} from 'redux';

import userReducer from './user/userReducer';
import messagesReducer from './messages/messagesReducer';

const rootReducer = combineReducers({
	user: userReducer,
	messages: messagesReducer 
});

export default rootReducer;
