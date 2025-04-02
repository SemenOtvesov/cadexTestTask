import { CButton, CContainer, CHeader, CHeaderBrand } from '@coreui/react';
import React from 'react';

// @ts-ignore: Unreachable code error
import LogoImg from '@maket/img/logo.png';
import style from '../style';
import { Link } from 'react-router-dom';

const header = () => {
    const { LogoWrapper, Logo } = style();
    return (
        <>
            <CHeader>
                <CContainer fluid>
                    <Link to={'/'}>
                        <LogoWrapper>
                            {/* <Logo src={LogoImg} /> */}
                            {/* CAD Task */}
                            Some Company
                        </LogoWrapper>
                    </Link>

                    <Link to={'/contactUs'}>
                        <CButton type="submit" color="primary" variant="outline">
                            Contact us
                        </CButton>
                    </Link>
                </CContainer>
            </CHeader>
        </>
    );
};

export default header;
