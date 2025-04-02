import React from 'react';
import style from './style';
import { CButton } from '@coreui/react';
import { Link } from 'react-router-dom';

export default () => {
    const { Container, Title, Main, Item, ItemTitle, ItemText, size } = style();
    return (
        <Container>
            <Title>Also very important title</Title>
            <Main>
                {Array.from({ length: 6 }).map((el, i) => (
                    <Item key={'item' + i}>
                        <ItemTitle>Title</ItemTitle>
                        <ItemText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
                            leo et condimentum
                        </ItemText>
                    </Item>
                ))}
            </Main>
            <Link to={'/contactUs'}>
                <CButton
                    style={{
                        padding: '0.5em',
                        minWidth: size.isMobile ? 'calc(100vw - 2em)' : '20em',
                        maxWidth: '100%',
                    }}
                    type="submit"
                    color="primary"
                    variant="outline"
                >
                    Contact us
                </CButton>
            </Link>
        </Container>
    );
};
