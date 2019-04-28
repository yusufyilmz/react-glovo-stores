import React from 'react';
import { shallow, mount } from 'enzyme';
import CategoryContainer from '../categoryContainer';
import CategoryCard from '../../components/Category/categoryCard';

import { Provider } from 'react-redux';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import configureMockStore from 'redux-mock-store';

const middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware];


describe('CATEGORY CONTAINER COMPONENT', () => {
    let wrapper; 

    beforeEach(() => {

        const mockStore = configureMockStore(middlewares);
        const category = {
            items: [],
            error: null
        };

        const store = mockStore({
            category,
        });

        let item = {}
        wrapper = shallow(
            <Provider store={store}>
                <CategoryContainer />
            </Provider>
        );

    });

    test('renders element correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });


      test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
});
