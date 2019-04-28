/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import StoreCard from '../storeCard';

describe('STORE CARD COMPONENT', () => {
  let wrapper; let
    props;

  beforeEach(() => {
    props = {
      item: {
        name: 'snacks',
        open: true,
        description: 'Snacks',
        message: 'message',
        tags: ['tag']
      }
    };

    wrapper = shallow(
      <StoreCard {...props} />
    );
  });


  test('renders element correctly', () => {
    expect(wrapper.find('StoreCardWrapper').length).toBe(1);
  });

  test('renders element correctly', () => {
    expect(wrapper.find('StoreCardTitleWrapper').length).toBe(1);
  });


  test('renders element correctly', () => {
    expect(wrapper.find('StoreCardTitleWrapper').length).toBe(1);
  });

  test('renders props correctly', () => {
    expect(wrapper.find('StoreLabel').length).toEqual(props.item.tags.length);
  });


  test('renders text correctly', () => {
    expect(wrapper.find('StoreCardTitleWrapper').text()).toEqual(props.item.name);
  });

  test('renders text correctly', () => {
    expect(wrapper.find('StoreCardSubTitleWrapper').text()).toEqual(props.item.description);
  });

//   test('snapchat correctly', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
});
