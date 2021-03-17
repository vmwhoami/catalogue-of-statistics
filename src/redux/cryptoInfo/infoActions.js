import axios from 'axios';
import { GET_ID, ONE_CRYPTO_DATA } from './infoActionTypes';
import { config } from '../crypto/cryptoActions';

axios.defaults.headers.common = {
  'X-CoinAPI-Key': `${process.env.REACT_APP_API_KEY}`,
};
const getCoinId = str => (
  {
    type: GET_ID,
    payload: str,
  }
);

const fetchCryptoInfoSuccess = data => (
  {
    type: ONE_CRYPTO_DATA,
    payload: data,
  });

const fetchCryptoInfo = id => async dispatch => {
  const url = `https://rest.coinapi.io/v1/ohlcv/${id}/USD/latest?period_id=1DAY&limit=14`;
  try {
    const response = await axios({
      method: 'GET',
      url,
      data: {
      },
      config,
    });
    return dispatch(fetchCryptoInfoSuccess(response.data));
  } catch (e) {
    return e;
  }
};

export { getCoinId, fetchCryptoInfo };
