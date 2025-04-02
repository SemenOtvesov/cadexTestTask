import React from 'react';
import style from './style';
import { CButton, CFormInput, CFormTextarea, CInputGroup, CInputGroupText } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { cilUser, cilAlignCenter } from '@coreui/icons';
import { useForm } from 'react-hook-form';
import { mailRegExp } from '@js/constants/values';

import useSubmitProfiler from './useSubmitProfiler';
import { TMessageForm } from '@js/types/forms/messageForm';
import Button from './button';

export default () => {
    const { FormWrapper, FormItem, FormItemTitle } = style();
    const { handleSubmit, register, setFocus, formState } = useForm<TMessageForm>();

    const [submit, error] = useSubmitProfiler(setFocus);

    return (
        <FormWrapper onSubmit={handleSubmit(submit, error)}>
            <FormItem>
                <FormItemTitle>Name</FormItemTitle>
                <CInputGroup className="flex-nowrap">
                    <CInputGroupText id="addon-wrapping">
                        <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                        {...register('name', { required: true })}
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="addon-wrapping"
                    />
                </CInputGroup>
            </FormItem>
            <FormItem>
                <FormItemTitle>Email</FormItemTitle>
                <CInputGroup className="flex-nowrap">
                    <CInputGroupText id="addon-wrapping">@</CInputGroupText>
                    <CFormInput
                        {...register('email', { required: true, pattern: mailRegExp })}
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="addon-wrapping"
                    />
                </CInputGroup>
            </FormItem>
            <FormItem>
                <FormItemTitle>Message</FormItemTitle>
                <CInputGroup className="flex-nowrap">
                    <CInputGroupText id="addon-wrapping">
                        <CIcon icon={cilAlignCenter} />
                    </CInputGroupText>
                    <CFormTextarea
                        {...register('message', { required: true })}
                        onChange={e => {
                            if (e.target.scrollHeight > e.target.clientHeight) {
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }
                        }}
                        className="scrollbar"
                        style={{ maxHeight: '20vh', height: '6em' }}
                        placeholder="Message"
                        aria-label="Message"
                        aria-describedby="addon-wrapping"
                    />
                </CInputGroup>
            </FormItem>
            <Button />
        </FormWrapper>
    );
};
