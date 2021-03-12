import axios from 'axios';
import * as act from '../redux/actionTypes';

const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://rest.coinapi.io/';

const fetchDatasuccess = data => ({
  type: act.LOAD_SUCCESS,
  payload: { data },
});


const fetchData = () => async dispatch => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `X-CoinAPI-Key: ${apiKey}`,
      }
    });
    return dispatch(fetchDatasuccess(response));
  } catch (e) {
    return e;
  }
};

export { fetchData, fetchDatasuccess };
