import React from 'react';
import { shallow } from 'enzyme';
import {StoreLabel} from '../storeLabel';

describe('STORE LABEL COMPONENT', () => {
  let wrapper; let
    props;

  beforeEach(() => {
    props = {
      label: 'label'
    };

    wrapper = shallow(
      <StoreLabel {...props} />
    );
  });


  test('renders element correctly', () => {
    expect(wrapper.find('StoreLabelWrapper').length).toBe(1);
  });

  test('renders prop correctly', () => {
    expect(wrapper.find('StoreLabelWrapper').prop('color')).toBeTruthy();
  });

  test('renders text correctly', () => {
    expect(wrapper.find('StoreLabelWrapper').text()).toBe(props.label);
  });

  // test('snapchat correctly', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });
});
