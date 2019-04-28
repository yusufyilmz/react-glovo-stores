


import styled from 'styled-components';
import { secondColor } from '../../constants/globalStyles';

export const FilterInputWrapper = styled.input`
    border-color: ${secondColor} !important;
    color: #000;
    text-align: left;
    font-size: 20px;
    height: 30px;
    padding-bottom: 15px;
    padding-left: 50px;
    width: 100%;
    margin-bottom: 20px;
    background: transparent;
    border:none;
    border-bottom: 2px solid #C8CCD4
    border-radius: 0;
    border-color: ${secondColor}!important;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
    padding-top: 10px;
`;

FilterInputWrapper.displayName ='FilterInputWrapper';

export const FilterWrapper = styled.div`
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    display:flex;
    flex-direction: row;
`;

FilterWrapper.displayName ='FilterWrapper';


export const FilterInputSpanWrapper = styled.span`
`;

FilterInputSpanWrapper.displayName ='FilterInputSpanWrapper';
