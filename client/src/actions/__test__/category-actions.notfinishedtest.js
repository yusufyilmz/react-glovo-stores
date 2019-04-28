// import * as actions from '..';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import moxios from 'moxios';
// import * as actionTypes from '../../constants/actionTypes';
// import data from '../../../../files/categories.json';

// const middlewares = [thunk, promise];
// const mockStore = configureMockStore(middlewares);

// describe('CLIENT ACTIONS', () => {
//   let store;

//   beforeEach(() => {
//     store = mockStore({});
//     moxios.install();
//   });

//   afterEach(() => {
//     moxios.uninstall();
//   });


//   test('CATEGORY FETCH ACTION SUCCESS', () => {
//     const response = data.categories;

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response
//       });
//     });

//     const expectedActions = [
//       {
//         type: actionTypes.FETCH_CATEGORIES_SUCCESS,
//         payload: 
//           response
//       },
//     ];

//     return store.dispatch(actions.fetchCategories()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
