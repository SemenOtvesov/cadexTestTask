import { combineReducers, configureStore } from '@reduxjs/toolkit';
import allertState from './allert/index';
import userState from './user/index';

const rootReduser = combineReducers({
    [allertState.name]: allertState.reducer,
    [userState.name]: userState.reducer,
});

const store = configureStore({
    reducer: rootReduser,
});
export default store;

export type TrootState = ReturnType<typeof store.getState>;
export type TappDispatch = typeof store.dispatch;
