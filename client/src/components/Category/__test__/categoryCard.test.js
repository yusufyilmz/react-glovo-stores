/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CategoryCard from '../categoryCard';

describe('CATEGORY CARD COMPONENT', () => {
  let wrapper; let
    props;

  beforeEach(() => {
    props = {
      item: {
        name: 'snacks',
        closed: true,
        label: 'Snacks'
      }
    };

    wrapper = shallow(
      <CategoryCard {...props} />
    );
  });

  test('renders element correctly', () => {
    expect(wrapper.find('CategoryCardWrapper').length).toBe(1);
  });

  test('renders element correctly', () => {
    expect(wrapper.find('CategoryLinkWrapper').length).toBe(1);
  });

  test('renders props correctly', () => {
    expect(wrapper.find('CategoryCardWrapper').prop('closed')).toEqual(props.item.closed);
  });


  test('renders text correctly', () => {
    expect(wrapper.find('CategoryCardTitleWrapper').text()).toEqual(props.item.label);
  });

  test('snapchat correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
