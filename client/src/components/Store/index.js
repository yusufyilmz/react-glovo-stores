import React from 'react';
import { StoreList } from './storeList';
import { StorePageWrapper } from './style';
import { StoreHeader } from './storeHeader';

export default (props) => {
  var { type } = props.match.params;
  return <StorePageWrapper>
    <StoreHeader
      type={type} />
    <StoreList type={type} />
  </StorePageWrapper>
}
