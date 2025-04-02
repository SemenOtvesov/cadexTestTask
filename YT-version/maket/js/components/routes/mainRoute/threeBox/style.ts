import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: '2em',
            padding: size.isMobile ? '1em' : '2em',
            alignItems: 'center',

            backgroundColor: 'rgb(245, 245, 245)',
            borderTop: '1px solid rgb(221, 221, 221)',
            borderBottom: '1px solid rgb(221, 221, 221)',
        }),
        Title: styled.div({
            fontSize: size.isMobile ? '2em' : '3em',
            fontWeight: '700',
            textAlign: 'center',
        }),
        size,
    };
};
