import React from 'react';
import { HeaderTitleWrapper, HeaderWrapper } from "./style";


export const Header = ({title}) => (
    <HeaderWrapper>
        <HeaderTitleWrapper>
            {title}
        </HeaderTitleWrapper>
    </HeaderWrapper>
)