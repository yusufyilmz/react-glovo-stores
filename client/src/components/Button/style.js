


import styled from 'styled-components';
import { primaryColor, secondColor } from '../../constants/globalStyles';

export const ButtonWrapper = styled.button`
    width: ${props => props.width}px;
    padding: 10px 0;
    color: ${primaryColor};
    background: ${primaryColor};
    color: white;
    border-color: white;
    width: 100px;
    margin: 10px 0;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:hover {
      background: ${secondColor};
      border-color: ${secondColor};
    }
   
`;