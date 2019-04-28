import React, { Fragment, Suspense } from 'react';
import CategoryCard from './categoryCard';
import Spinner from '../Spinner';
import { Container, Row } from 'react-bootstrap';
import { CategoryCardListWrapper, CategoryColWrapper } from './style';
import { Error } from '../Error';

const CategoryContainer = React.lazy(() => import('../../containers/categoryContainer'))


export default () => (
  <Container>
    <Row>
      <Suspense fallback={<Spinner />}>
        <CategoryCardListWrapper>
          <CategoryContainer>
            {
              props => (
                <Fragment>
                  <Row>
                    {props.error && <Error message={props.error} />}
                  </Row>
                  <Row>
                    {props.categories.map(Category => (
                      <CategoryColWrapper key={Category.id} md={6}>
                        <CategoryCard
                          item={Category}
                        />
                      </CategoryColWrapper>
                    ))
                    }
                  </Row>
                </Fragment>
              )
            }
          </CategoryContainer>
        </CategoryCardListWrapper>

      </Suspense>
    </Row>
  </Container>
);
