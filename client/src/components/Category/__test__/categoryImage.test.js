/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CategoryCardImageWrapper from '../categoryImage';
import {FILTER_ICON_URL} from '../../../constants/urls';

describe('CATEGORY CARD IMAGE COMPONENT', () => {
  let wrapper; let
    props;

  beforeEach(() => {
    props = {
      item: {
        closed: true,
        sleepIcon: FILTER_ICON_URL,
        label: 'label'
      }
    };

    wrapper = shallow(
      <CategoryCardImageWrapper {...props} />
    );
  });


  test('renders element correctly', () => {
    expect(wrapper.find('CategoryCardImageWrapper').length).toBe(1);
  });

  test('renders props correctly', () => {
    expect(wrapper.find('CategoryCardImageWrapper').prop('src')).toEqual(props.item.sleepIcon);
  });


    test('snapchat correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
});
