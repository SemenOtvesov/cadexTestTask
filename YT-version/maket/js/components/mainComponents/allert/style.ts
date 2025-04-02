import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import { motion } from 'framer-motion';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled(motion.div)({
            position: 'fixed',
            top: '4.5rem',
            right: 0,
            width: '30vw',
        }),
        size,
    };
};
