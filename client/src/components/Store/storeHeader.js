import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { PageHeader } from '../Header';
import { StoreHeaderWrapper } from './style';


export const StoreHeader = ({ type }) => (
    <StoreHeaderWrapper>
        <PageHeader
            title={`${type}`}
            header={`${type}`}
            description={`${type} Store Page`}
            keywords={`${type}, Store, Glovo`} />
        <Link to="/category">
            <Button
                title="Back" />
        </Link>
    </StoreHeaderWrapper>

);
