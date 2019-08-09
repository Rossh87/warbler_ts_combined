import { TMessagesAction } from "./messages/messagesActions";
import { TUserAction } from "./user/userActions";
import { TErrorAction } from "./error/errorActions";

export type RootAction = TMessagesAction | TUserAction | TErrorAction;
