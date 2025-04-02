import { CAlert } from '@coreui/react';
import React, { useEffect } from 'react';
import style from './style';
import useAppSelector from '@js/hooks/useAppSelector';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { setAllertState } from '@js/state/allert';

export default () => {
    const dispatch = useAppDispatch();
    const { Container } = style();
    const { status, text } = useAppSelector(state => state.allertState);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setAllertState({ status: false, text: '' }));
            document
                .querySelectorAll('input, textarea')
                .forEach(el => el?.classList.remove('inputRedShadow'));
        }, 5000);
    }, [status]);

    return (
        <>
            {status && (
                <Container
                    initial={{ transform: 'translate(100%)' }}
                    animate={{ transform: 'translate(-5%)' }}
                >
                    <CAlert color="danger">{text}</CAlert>
                </Container>
            )}
        </>
    );
};
