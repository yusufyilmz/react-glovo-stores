import React from 'react';
import { FilterWrapper, FilterInputWrapper, FilterInputSpanWrapper } from "./style";
import { FILTER_ICON_URL } from '../../constants/urls';

export const Filter = ({ onChange, placeholder, type }) => (
    <FilterWrapper>
        <FilterInputSpanWrapper>
            <img src={FILTER_ICON_URL} alt={`Filter ${type}`} />
        </FilterInputSpanWrapper>
        <FilterInputWrapper
            type="text"
            onChange={(e) => onChange(e.target.value, type)}
            placeholder={placeholder} >
        </FilterInputWrapper>
    </FilterWrapper>

)