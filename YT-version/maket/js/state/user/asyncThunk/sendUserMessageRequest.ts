import message from '@js/api/servise/message';
import { TMessageForm } from '@js/types/forms/messageForm';
import { createAsyncThunk } from '@reduxjs/toolkit';

export default createAsyncThunk(
    'userState/sendMessage',
    async ({ data }: { data: TMessageForm }) => {
        return await message({ data });
    },
);
