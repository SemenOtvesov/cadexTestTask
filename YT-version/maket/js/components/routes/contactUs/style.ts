import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: size.isMobile ? '2em' : '4em',
            alignItems: 'center',
            justifyContent: 'center',

            padding: size.isMobile ? '1em' : '2em',
        }),
        Title: styled.div({
            fontSize: size.isMobile ? '2em' : '5em',
            fontWeight: '700',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }),
        FormWrapper: styled.form({
            display: 'flex',
            flexDirection: 'column',
            gap: size.isMobile ? '1em' : '2em',
            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: '#fff',
            padding: size.isMobile ? '1em' : '2em',
            borderRadius: '1em',
            border: '1px solid rgb(221, 221, 221)',
            width: size.isMobile ? '100%' : size.isTab ? '80%' : '40%',
        }),
        FormItem: styled.div({
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5em',
        }),
        FormItemTitle: styled.div({}),
        size,
    };
};
