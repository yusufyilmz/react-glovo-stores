import React, { Suspense } from 'react';
import { Card, } from 'react-bootstrap';
import { CategoryCardWrapper, CategoryCardTitleWrapper, CategoryCardImagePlaceholder, CategoryLinkWrapper } from './style';

const CardImage = React.lazy(() => import('./categoryImage'))

export default (props) => (
    <CategoryLinkWrapper to={`/category/${props.item.name}`}>
        <CategoryCardWrapper closed={props.item.closed}>
            <Suspense fallback={<CategoryCardImagePlaceholder />}>
                <CardImage {...props} />
            </Suspense>
            <Card.Body>
                <CategoryCardTitleWrapper>
                    <b>{props.item.label}</b>
                </CategoryCardTitleWrapper>
            </Card.Body>
        </CategoryCardWrapper>
    </CategoryLinkWrapper>
)
