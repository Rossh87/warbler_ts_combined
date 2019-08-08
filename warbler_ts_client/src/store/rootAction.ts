import { MessagesAction } from "./messages/messagesActions";
import { TUserAction } from "./user/userActions";
import { TErrorAction } from "./error/errorActions";

export type RootAction = MessagesAction | TUserAction | TErrorAction;
