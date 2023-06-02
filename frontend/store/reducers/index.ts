import { combineReducers } from "redux";
import { systemReducer } from "./systemReducer";
import { postReducer } from './postReducer';
import { userReducer } from './userReducer';

export const reducers = combineReducers({
  postsState: postReducer,
  systemReducer: systemReducer,
  userReducer: userReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
