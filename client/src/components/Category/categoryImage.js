import React from 'react';
import { CategoryCardImageWrapper } from './style';

export default function CardImage(props) {
    return <CategoryCardImageWrapper
        variant="top"
        src={props.item.closed ? props.item.sleepIcon : props.item.openIcon}
        alt={`Category ${props.item.label} image`} />
}
