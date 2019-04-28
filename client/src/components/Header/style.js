import styled from 'styled-components';
import { primaryColor } from '../../constants/globalStyles';

export const HeaderWrapper = styled.div`
    align-items: center;
    background: ${primaryColor};
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    height: 40px;
    left: 0;
    padding-left: 16px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
`

export const HeaderTitleWrapper = styled.div`
    flex: 1;
    margin-right: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
