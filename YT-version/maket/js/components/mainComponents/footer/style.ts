import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            padding: '2em',
            display: 'flex',
            justifyContent: 'center',
            borderTop: '1px solid rgb(221, 221, 221)',

            position: 'sticky',
            top: '100vh',
        }),
        Text: styled.div({
            fontSize: '1.25em',
            fontWeight: '700',
        }),
        size,
    };
};
