import { combineReducers } from 'redux';
import cryptoReducer from './crypto/cryptoReducer';
import infoReducer from './cryptoInfo/infoReducer';

const rootReducer = combineReducers({ cryptoReducer, infoReducer });

export default rootReducer;
