import { urlBack } from '@js/constants/values';
import { TMessageForm } from '@js/types/forms/messageForm';
import { TserviseMessageReq } from '@js/types/request/service/message';
import axios from 'axios';

export default async ({ data }: { data: TMessageForm }) => {
    const req = await axios.post<TserviseMessageReq>(`${urlBack}/service/message`, data);
    return req.data;
};
