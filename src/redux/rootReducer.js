import { combineReducers } from 'redux';
import cryptoReducer from './cryptoReducer';

const rootReducer = combineReducers({ cryptoReducer });

export default rootReducer;
