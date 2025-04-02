import { createSlice } from '@reduxjs/toolkit';
import sendUserMessageReduser from './extraReducers/sendUserMessageReduser';
import sendUserMessageRequest from './asyncThunk/sendUserMessageRequest';
import { TUserState } from '@js/types/state/userState';

const initialState: TUserState = { serverMessage: '', status: false };

const userState = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        clearServerMessage: state => {
            state.status = false;
            state.serverMessage = '';
        },
    },
    extraReducers: build => {
        build.addCase(sendUserMessageRequest.fulfilled, sendUserMessageReduser);
    },
});

export const { clearServerMessage } = userState.actions;

export default userState;
