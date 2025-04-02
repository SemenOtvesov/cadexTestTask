import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';

import MainRoute from '../routes/mainRoute/index';
import ContactUs from '../routes/contactUs/index';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainRoute />} />
                <Route path="contactUs" element={<ContactUs />} />
            </Route>
        </Routes>
    );
};
