import useAppDispatch from '@js/hooks/useAppDispatch';
import { setAllertState } from '@js/state/allert';
import sendUserMessageRequest from '@js/state/user/asyncThunk/sendUserMessageRequest';
import { TMessageForm } from '@js/types/forms/messageForm';
import { SubmitErrorHandler, SubmitHandler, UseFormSetFocus } from 'react-hook-form';

export default (
    setFocus: UseFormSetFocus<TMessageForm>,
): [SubmitHandler<TMessageForm>, SubmitErrorHandler<TMessageForm>] => {
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<TMessageForm> = data => {
        dispatch(sendUserMessageRequest({ data }));
    };
    const error: SubmitErrorHandler<TMessageForm> = err => {
        let checkRequired = false;
        let checkPattern = false;
        Object.values(err).forEach(el => {
            if (el.type == 'required') {
                checkRequired = true;
            }
            if (el.type == 'pattern') {
                checkPattern = true;
            }
        });

        if (checkRequired) {
            dispatch(setAllertState({ text: 'Not all fields are filled in', status: true }));
            console.log(err);
            const focusElIndex = Object.values(err).findIndex(el => el.type == 'required');
            if (focusElIndex != -1) {
                setTimeout(() => {
                    // @ts-ignore: Unreachable code error
                    setFocus(Object.keys(err)[focusElIndex]);
                }, 100);
            }
        } else if (checkPattern) {
            dispatch(setAllertState({ text: 'Invalid mail format', status: true }));
        } else {
            dispatch(
                setAllertState({
                    text: 'An error has occurred, please try again later',
                    status: true,
                }),
            );
        }

        setTimeout(() => {
            const elem = document.activeElement;
            elem?.classList.add('inputRedShadow');
        }, 200);
    };

    return [submit, error];
};
