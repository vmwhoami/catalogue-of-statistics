import axios from 'axios';
import * as act from './actionTypes';

const url = 'https://rest.coinapi.io/v1/assets?type_is_crypto=1';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
axios.defaults.headers.common = {
  'X-CoinAPI-Key': `${process.env.REACT_APP_API_KEY}`,
};

const fetchCryptoSuccess = data => ({
  type: act.LOAD_SUCCESS,
  payload: data,
});

const fetchCryptoInfoFailure = () => (
  {
    type: act.LOAD_FAILURE,
    payload: [],
    error: true,
  }
);

const changeFilter = str => ({
  type: act.CHANGE_FILTER,
  payload: str,
});

const fetchCrypto = () => async dispatch => {
  try {
    const response = await axios({
      method: 'GET',
      url,
      data: {
      },
      config,
    });
    return dispatch(fetchCryptoSuccess(response.data));
  } catch (e) {
    return dispatch(fetchCryptoInfoFailure());
  }
};

export {
  fetchCrypto, fetchCryptoSuccess, changeFilter, fetchCryptoInfoFailure, config,
};
