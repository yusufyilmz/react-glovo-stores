import React from 'react';
import { ErrorWrapper, ErrorTitleWrapper, ErrorSubTitleWrapper } from './style';

export const Error = ({ message }) => (
    <ErrorWrapper>
        <ErrorTitleWrapper>
            Ooops !
        </ErrorTitleWrapper>
        <ErrorSubTitleWrapper>
            {message}
        </ErrorSubTitleWrapper>
    </ErrorWrapper>
)

