import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initial = {
  data: {
    id: 10,
    title: 'Antic Hay',
    category: 'Fiction',
    author: 'An Evil Cradling',
  },
};
const store = createStore(rootReducer, initial,
  composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
