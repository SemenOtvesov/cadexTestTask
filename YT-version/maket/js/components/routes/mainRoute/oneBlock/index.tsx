import React from 'react';
import style from './style';
import Video from './video';

export default () => {
    const { Container, Left, Title, Text, Rigth } = style();
    return (
        <Container>
            <Left>
                <Title>
                    Most important <br /> title on the page
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
                    condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus
                    tincidunt ante
                </Text>
            </Left>
            <Rigth>
                <Video />
            </Rigth>
        </Container>
    );
};
