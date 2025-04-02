import { TAllertState } from '@js/types/state/allertState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TAllertState = { text: '', status: false };

const allertState = createSlice({
    name: 'allertState',
    initialState,
    reducers: {
        setAllertState: (state, { payload }: { payload: TAllertState }) => {
            state.status = payload.status;
            state.text = payload.text;
        },
    },
});

export const { setAllertState } = allertState.actions;

export default allertState;
