import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: size.isMobile ? '3em' : '4em',
            justifyContent: 'space-between',
            alignItems: 'center',

            padding: size.isMobile ? '1em' : '2em',
        }),
        Title: styled.div({
            fontSize: size.isMobile ? '2em' : '3em',
            fontWeight: '700',
            textAlign: 'center',
        }),
        Main: styled.div({
            flexWrap: 'wrap',
            display: 'flex',
            gap: '2em',
            justifyContent: 'space-between',
        }),
        Item: styled.div({
            flex: size.isMobile ? '0 0 100%' : '0 0 30%',

            display: 'flex',
            flexDirection: 'column',
            gap: '0.5em',
        }),
        ItemTitle: styled.div({ fontWeight: 600, fontSize: '1.5em' }),
        ItemText: styled.div({}),
        size,
    };
};
