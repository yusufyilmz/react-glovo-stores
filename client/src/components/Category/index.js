import React from 'react';
import CategoryList from './categoryList';
import { PageHeader } from '../Header';
import { CategoryPageWrapper } from './style';

export default (props) => (
  <CategoryPageWrapper>
    <PageHeader
      title="Category"
      description="Category Page"
      keywords="Category, Glovo" />
    <CategoryList />
  </CategoryPageWrapper>
)
