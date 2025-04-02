import { TserviseMessageReq } from '@js/types/request/service/message';
import { TUserState } from '@js/types/state/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const loginReduser: CaseReducer<TUserState, PayloadAction<TserviseMessageReq | undefined>> = (
    state,
    action,
) => {
    state.serverMessage = action.payload?.serverMessage || '';
    state.status = action.payload?.status || false;
};
export default loginReduser;
