import React from 'react';
import { shallow, mount } from 'enzyme';
import { Filter } from '../index';

describe('FILTER COMPONENT', () => {
    let wrapper; let
        props;

    beforeEach(() => {
        props = {
            onChange: jest.fn(),
            placeholder: 'placeholder',
            type: 'type'
        };

        wrapper = shallow(
            <Filter {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('FilterInputWrapper').length).toBe(1);
    });


    test('renders prop correctly', () => {
        expect(wrapper.find('FilterInputWrapper').prop('placeholder')).toBe(props.placeholder)
    });

    test('renders prop correctly', () => {
        const event = {target: {name: "targetName", value: "targetValue"}};
        wrapper.find('FilterInputWrapper').simulate('change',event);
        expect(props.onChange.mock.calls.length).toEqual(1);

    });


      test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
});
