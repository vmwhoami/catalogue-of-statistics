import { combineReducers } from 'redux';
import cryptoReducer from './crypto/cryptoReducer';

const rootReducer = combineReducers({ cryptoReducer });

export default rootReducer;
