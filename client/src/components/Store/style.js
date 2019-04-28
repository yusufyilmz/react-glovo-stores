import styled from 'styled-components';
import { Card, Container } from 'react-bootstrap'
import { primaryColor, secondColor } from '../../constants/globalStyles';

export const StoreCardWrapper = styled(Card)`
    border: 1.5px solid  ${props => props.open ? primaryColor : secondColor};
    border-radius: 10px;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.1);
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 40px;
    transition: .3s;
    text-align: center;
    padding: 15px;
    height: 250px;
    position: relative;
    &:hover {
      transform: scale(1.04, 1.04) 
    }
`;

StoreCardWrapper.displayName = 'StoreCardWrapper';

export const StoreListWrapper = styled(Container)`
    justify-content: center;
    align-items:center;
`;

StoreListWrapper.displayName = 'StoreListWrapper';


export const StoreCardMessageWrapper = styled(Card.Text)`
    font-weight: bold
`;

StoreCardMessageWrapper.displayName = 'StoreCardMessageWrapper';


export const StorePageWrapper = styled.div`
    margin-top: 50px;
`
StorePageWrapper.displayName = 'StorePageWrapper';


export const StoreLabelWrapper = styled.span`
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.1);
    border-radius: 100px;
    font-size: 12px;
    line-height: 15px;
    padding: .50em 10px;
    background-color: ${props => props.color};
    color: #000000;
    margin: 0 2px;
    text-decoration: none!important;
    &:hover {
      text-decoration: none!important;
      color: #000000;
    }
`

StoreLabelWrapper.displayName = 'StoreLabelWrapper';

export const StoreCardTitleWrapper = styled.div`
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    line-height: 24px!important;
    margin: 0 auto 10px;
`

StoreCardTitleWrapper.displayName = 'StoreCardTitleWrapper';


export const StoreCardSubTitleWrapper = styled.div`
    margin-top: 20px;
    height: 30px;
    line-height: 1.1em;
    font-size: 16px;
    color: #9b9b9b;
    text-align: center;
`

StoreCardSubTitleWrapper.displayName = 'StoreCardSubTitleWrapper';



export const StoreHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`

StoreHeaderWrapper.displayName = 'StoreHeaderWrapper';


export const StoreDetailWrapper = styled.div`
    margin-top: 50px;
`

StoreDetailWrapper.displayName = 'StoreDetailWrapper';


export const StoreLabelListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

StoreLabelListWrapper.displayName = 'StoreLabelListWrapper';
