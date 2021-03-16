import { LOAD_SUCCESS, LOAD_FAILURE, CHANGE_FILTER } from './actionTypes';

const initialState = {
  loading: true,
  crypto: [{
    asset_id: 'BTC',
    data_end: '2021-03-12',
    id_icon: '4caf2b16-a017-4e26-a348-2cea69c34cba',
    name: 'Bitcoin',
    price_usd: 56499.61458136415,
    type_is_crypto: 1,
  }],
  filter: 'ALL',
  error: '',
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        crypto: action.payload
          .filter(data => data.type_is_crypto === 1)
          .filter(data => data.id_icon)
          .filter(data => data.price_usd)
          .filter(data => data.price_usd > 1 && data.price_usd < 70000),
      };

    case LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        filter: 'ALL',
        error: true,
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default cryptoReducer;
