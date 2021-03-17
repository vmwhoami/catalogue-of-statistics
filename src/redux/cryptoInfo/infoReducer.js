import { GET_ID, ONE_CRYPTO_DATA } from './infoActionTypes';

const init = {
  loading: true,
  cryptoId: '',
  cryptoInfo: [],
};

const infoReducer = (state = init, action) => {
  switch (action.type) {
    case GET_ID:
      return {
        ...state,
        cryptoId: action.payload,
        cryptoInfo: [],
      };
    case ONE_CRYPTO_DATA:
      return {
        ...state,
        loading: false,
        cryptoInfo: action.payload,
      };
    default:
      return state;
  }
};

export default infoReducer;
