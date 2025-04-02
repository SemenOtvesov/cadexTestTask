import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            flexDirection: size.isMobile || size.isTab ? 'column' : 'row',
            gap: '2em',
            justifyContent: 'space-between',
            padding: size.isMobile ? '1em' : '2em',
            width: '100%',
        }),
        Left: styled.div({
            flex: size.isMobile || size.isTab ? '0 0 100%' : '0 0 40%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
        }),
        Title: styled.div({
            fontSize: size.isMobile ? '2em' : '3em',
            fontWeight: '700',
        }),
        Text: styled.div({ lineHeight: '1.25em', maxWidth: '22em' }),
        Rigth: styled.div({
            flex: size.isMobile || size.isTab ? '0 0 100%' : '0 0 40%',
            width: size.isMobile || size.isTab ? '100%' : '40%',
        }),
        Video: styled.div({
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            iframe: { aspectRatio: '1/0.55' },
        }),
        size,
    };
};
