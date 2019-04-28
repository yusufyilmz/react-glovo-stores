import React, { Fragment, Suspense } from 'react';
import CategoryCard from './categoryCard';
import Spinner from '../Spinner';
import { Container, Row } from 'react-bootstrap';
import { CategoryCardListWrapper, CategoryColWrapper } from './style';
import { Error } from '../Error';

const CategoryContainer = React.lazy(() => import('../../containers/categoryContainer'))


export default () => (
  <Suspense fallback={<Spinner />}>
    <CategoryContainer>
      {
        props => (
          <Fragment>
            {props.error && <Error message={props.error} />}
            <CategoryCardListWrapper>
              {props.categories.map(Category => (
                <CategoryColWrapper key={Category.id} md={6}>
                  <CategoryCard
                    item={Category}
                  />
                </CategoryColWrapper>
              ))
              }
            </CategoryCardListWrapper>
          </Fragment>
        )
      }
    </CategoryContainer>

  </Suspense>
);
