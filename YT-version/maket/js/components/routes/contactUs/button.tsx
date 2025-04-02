import { CButton } from '@coreui/react';
import useAppSelector from '@js/hooks/useAppSelector';
import React from 'react';

export default () => {
    const { status } = useAppSelector(state => state.allertState);
    return (
        <CButton
            style={{ width: '100%', padding: '0.5em' }}
            type="submit"
            color="primary"
            variant="outline"
            disabled={status}
        >
            Submit
        </CButton>
    );
};
