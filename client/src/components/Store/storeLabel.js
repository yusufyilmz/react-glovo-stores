import React from 'react';
import { StoreLabelWrapper } from './style';
import { getRandomColor } from '../../Helpers/colorHelper';

export const StoreLabel = ({ label }) => {
    return (
        <StoreLabelWrapper
            color={getRandomColor()}>
            {label}
        </StoreLabelWrapper>
    );
}