import React from 'react';
import { mount } from 'enzyme';
import { StoreHeader } from '../storeHeader';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { PageHeader } from '../../Header';

describe('STORE HEADER COMPONENT', () => {
    let wrapper; let
        props;

    beforeEach(() => {
        props = {
            type: 'snacks'
        };

        wrapper = mount(<Router>
            <StoreHeader {...props} />
        </Router>
        );
    });


    test('renders element correctly', () => {
        expect(wrapper.find('StoreHeaderWrapper').length).toBe(1);
    });


    test('renders prop correctly', () => {
        expect(wrapper.find(PageHeader).length).toBe(1)
    });

    test('renders prop correctly', () => {
        expect(wrapper.find(PageHeader).prop('title')).toBe(props.type)
    });

    test('renders prop correctly', () => {
        expect(wrapper.find(Link).prop('to')).toBe('/category')
    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
