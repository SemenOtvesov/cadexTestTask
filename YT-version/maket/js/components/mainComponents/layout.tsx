import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/index';
import Footer from './footer/index';
import { TlayoutContext } from '@js/types/context/layout';

import '@coreui/coreui/dist/css/coreui.min.css';
import Allert from './allert/index';
import { AnimatePresence } from 'framer-motion';

export const LayoutContext = createContext<TlayoutContext>({});

export default () => {
    return (
        <LayoutContext.Provider value={'val'}>
            <Header />
            <AnimatePresence>
                <Allert />
            </AnimatePresence>
            <Outlet />
            <Footer />
        </LayoutContext.Provider>
    );
};
