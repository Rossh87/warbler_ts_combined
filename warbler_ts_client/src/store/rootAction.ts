import {MessagesAction} from './messages/messagesActions';
import { UserAction } from './user/userActions';

export type RootAction = MessagesAction | UserAction;
