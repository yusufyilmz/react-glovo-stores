import React, { Suspense } from 'react';
import StoreCard from './storeCard';
import Spinner from '../Spinner';
import { Filter } from '../Filter';
import { Error } from '../Error';
import { Container, Row, Col } from 'react-bootstrap';

const StoreContainer = React.lazy(() => import('../../containers/storeContainer'))

export const StoreList = ({ type }) => (
  <Suspense fallback={<Spinner />}>
    <StoreContainer
      type={type} >
      {
        props => (
          <Container>
            <Filter
              type={type}
              placeholder={`Search in the ${type} with tags`}
              onChange={props.filterHandleChange} />
            {props.error && <Error message={props.error} />}
            <Row>
              {props.stores.map(store => (
                <Col
                  md={6}
                  lg={4}
                  key={store.id} >
                  <StoreCard
                    item={store} />
                </Col>
              ))}
            </Row>
          </Container>
        )
      }
    </StoreContainer>
  </Suspense>

);
