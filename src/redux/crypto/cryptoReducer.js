import { LOAD_SUCCESS } from './actionTypes';

const initialState = {
  loading: true,
  crypto: [],
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        loading: false,
        crypto: action.payload,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
