import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import css from '../styles/cryptpInfo.module.css';
import Loading from '../components/Loading';
import { fetchCryptoInfo } from '../redux/cryptoInfo/infoActions';
import Erropage from '../components/Errorpage';

const CryptoInfo = () => {
  const state = useSelector(state => state.infoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoInfo(state.cryptoId));
  }, [state.cryptoId]);
  const { cryptoInfo, loading } = state;
  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (cryptoInfo.length > 0) {
    return (
      loading ? <Loading /> : (
        <div className={css.container}>
          <Line
            data={{
              labels: cryptoInfo.map(info => formatDate(info.time_period_start)).reverse(),
              datasets: [
                {
                  label: 'Highest price value',
                  data: cryptoInfo.map(info => info.price_high).reverse(),
                  backgroundColor: '#5788e46e',
                },

                {
                  label: 'Lowest price value',
                  data: cryptoInfo.map(info => info.price_low).reverse(),
                  backgroundColor: '#2b44726e',
                },
              ],
            }}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>

      )
    );
  }
  return <Erropage />;
};

export default CryptoInfo;
