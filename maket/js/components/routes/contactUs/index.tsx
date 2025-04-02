import React, { useEffect } from 'react';
import style from './style';
import Form from './form';
import useAppSelector from '@js/hooks/useAppSelector';
import useAppDispatch from '@js/hooks/useAppDispatch';
import { clearServerMessage } from '@js/state/user';
import { useLocation } from 'react-router-dom';

export default () => {
    const dispatch = useAppDispatch();
    const { Container, Title } = style();
    const { status, serverMessage } = useAppSelector(state => state.userState);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/contactUs') {
            console.log('Unmounting contactUs page');
            dispatch(clearServerMessage());
        }
        console.log('Unmounting contactUs page');
        dispatch(clearServerMessage());
    }, [location.pathname]);

    return (
        <Container className="scrollbar">
            {status ? (
                <Title style={{ height: '70vh' }}>{serverMessage}</Title>
            ) : (
                <>
                    <Title>Only CTA on the page</Title>
                    <Form />
                </>
            )}
        </Container>
    );
};
