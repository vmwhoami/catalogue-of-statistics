import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initial = {
  dataReducer: {
    data: [{
      exchange_id: 'BINANCE',
      website: 'https://www.binance.com/',
      name: 'Binance',
      data_start: '2017-07-14',
      data_end: '2021-03-12',
      data_quote_start: '2017-12-18T21:50:58.3910192Z',
      data_quote_end: '2021-03-12T08:48:13.2440000Z',
      data_orderbook_start: '2017-12-18T21:50:58.3910192Z',
      data_orderbook_end: '2020-08-05T14:37:58.9010000Z',
      data_trade_start: '2017-07-14T04:00:00.3760000Z',
      data_trade_end: '2021-03-12T08:49:21.4060000Z',
      data_symbols_count: 1341,
      volume_1hrs_usd: 1236800523.19,
      volume_1day_usd: 31864383270.42,
      volume_1mth_usd: 1055156472553.13,
    },
    ],
  },
};

const store = createStore(rootReducer, initial,
  composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
