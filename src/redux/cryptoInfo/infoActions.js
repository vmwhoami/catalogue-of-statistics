// let url = ` https://rest.coinapi.io/v1/ohlcv/BTC/USD/latest?period_id=1DAY&limit=10`
import GET_ID from './infoActionTypes';

const getCoinId = str => (
  {
    type: GET_ID,
    payload: str,
  }
);

export default getCoinId;
// const fetchCrypto = () => async dispatch => {
//   try {
//     const response = await axios({
//       method: 'GET',
//       url,
//       data: {
//       },
//       config,
//     });
//     return dispatch(fetchCryptoSuccess(response.data));
//   } catch (e) {
//     return e;
//   }
// };
