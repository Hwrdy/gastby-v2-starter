
import { createStore as reduxCreateStore } from 'redux';

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1,
      });

    default:
      return state;
  }
};

const initialState = { count: 0 };

/* eslint-disable no-underscore-dangle */
const createStore = () => reduxCreateStore(
  reducer,
  initialState,
  typeof window !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() :
    undefined,
);
/* eslint-enable */

export default createStore;
