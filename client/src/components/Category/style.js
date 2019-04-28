import styled from 'styled-components';
import { Card, Col } from 'react-bootstrap'
import { device } from '../../constants/mediaQueries';
import { Link } from 'react-router-dom';
import { primaryColor, secondColor } from '../../constants/globalStyles';

export const CategoryLinkWrapper = styled(Link)`
   &:hover {
    color:white;
    text-decoration:none;
    cursor:pointer;
   }
`
CategoryLinkWrapper.displayName = 'CategoryLinkWrapper';

export const CategoryColWrapper = styled(Col)`
    max-width: 100%!important;
    padding-right: 0px!important;
    padding-left: 0px!important;
`

CategoryColWrapper.displayName = 'CategoryColWrapper';


export const CategoryCardWrapper = styled(Card)`
    border: 1px solid  ${props => props.closed ? secondColor : primaryColor};
    border-radius: 10px;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.1);
    text-decoration: none;
    overflow: hidden;
    margin-bottom: 40px;
    transition: .3s;
    min-width: 260px;
    text-align: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    margin: 10px;
    max-width: 100%;
    position: relative;
    width: 300px;
    height: 180px;
    &:hover {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
        transform: scale(1.06, 1.06) 
    }
    @media ${device.mobileS} { 
        width: 240px;
    }
    @media ${device.mobileM} { 
        width: 300px;
        height: 225px;
    }
`;

CategoryCardWrapper.displayName = 'CategoryCardWrapper';


export const CategoryPageWrapper = styled.div`
    margin-top: 50px;
`

CategoryPageWrapper.displayName = 'CategoryPageWrapper';


export const CategoryCardListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
`;

CategoryCardListWrapper.displayName = 'CategoryCardListWrapper';


export const CategoryCardTitleWrapper = styled(Card.Title)`
    font-size: 22px;
    color: #000;
    line-height: 24px!important;
    margin-bottom: 10px;
    font-weight: 400;
`;

CategoryCardTitleWrapper.displayName = 'CategoryCardTitleWrapper';


export const CategoryCardImageWrapper = styled(Card.Img)`
    height: 170px;
    position: relative;
    object-fit: cover;
`;

CategoryCardImageWrapper.displayName = 'CategoryCardImageWrapper';


export const CategoryCardImagePlaceholder = styled(Card.Img)`
    width: 100%;
    height: 170px;
    position: relative;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: lightgray;
`;


CategoryCardImagePlaceholder.displayName = 'CategoryCardImagePlaceholder';
