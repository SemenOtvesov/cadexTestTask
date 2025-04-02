import React from 'react';
import style from './style';

import OneBlock from './oneBlock/index';
import TwoBlock from './twoBlock/index';
import ThreeBox from './threeBox/index';

export default () => {
    const { Container } = style();
    return (
        <Container className="scrollbar">
            <OneBlock />
            <TwoBlock />
            <ThreeBox />
        </Container>
    );
};
