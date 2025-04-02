import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        LogoWrapper: styled.div({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5em',
            fontWeight: '700',
            color: 'rgb(0, 0, 0)',
        }),
        Logo: styled.img({
            width: '2em',
            height: '2em',
        }),
        size,
    };
};
