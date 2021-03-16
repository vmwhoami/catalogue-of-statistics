import { LOAD_SUCCESS, LOAD_FAILURE, CHANGE_FILTER } from './actionTypes';

const initialState = {
  loading: true,
  crypto: [{
    asset_id: 'BTC',
    data_end: '2021-03-12',
    data_orderbook_end: '2020-08-05T14:38:38.3413202Z',
    data_orderbook_start: '2014-02-24T17:43:05.0000000Z',
    data_quote_end: '2021-03-12T12:38:08.0821236Z',
    data_quote_start: '2014-02-24T17:43:05.0000000Z',
    data_start: '2010-07-17',
    data_symbols_count: 49299,
    data_trade_end: '2021-03-12T13:02:22.0000000Z',
    data_trade_start: '201s0-07-17T23:09:17.0000000Z',
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
