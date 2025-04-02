import React from 'react';
import style from './style';
import { CButton } from '@coreui/react';
import { Link } from 'react-router-dom';

export default () => {
    const { Container, Title, size } = style();
    return (
        <Container>
            <Title>Less important title</Title>
            <Link to={'/contactUs'}>
                <CButton
                    style={{
                        padding: '0.5em',
                        minWidth: size.isMobile ? 'calc(100vw - 2em)' : '20em',
                        maxWidth: '100%',
                    }}
                    color="primary"
                    variant="outline"
                >
                    Contact us
                </CButton>
            </Link>
        </Container>
    );
};
