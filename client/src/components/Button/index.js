import React from 'react';
import { ButtonWrapper } from './style';

export const Button = (props) => (
    <ButtonWrapper
        type="submit"
        {...props}>
        {props.title}
    </ButtonWrapper>
)





