import { combineReducers } from 'redux';
import { toDoReducer } from './toDoReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  todo: toDoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
