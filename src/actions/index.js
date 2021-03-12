import axios from 'axios';
import * as act from '../redux/actionTypes';

const url = 'https://rest.coinapi.io/v1/assets?type_is_crypto=1';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
axios.defaults.headers.common = {
  'X-CoinAPI-Key': `${process.env.REACT_APP_API_KEY}`,
};

const fetchDatasuccess = data => ({
  type: act.LOAD_SUCCESS,
  payload: { data },
});

const fetchData = () => async dispatch => {
  try {
    const response = await axios({
      method: 'GET',
      url,
      data: {
      },
      config,
    });
    return dispatch(fetchDatasuccess(response.data));
  } catch (e) {
    return e;
  }
};

export { fetchData, fetchDatasuccess };
