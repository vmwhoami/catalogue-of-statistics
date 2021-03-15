import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from '../styles/cryptpInfo.module.css';
import Loading from '../components/Loading';
import { fetchCryptoInfo } from '../redux/cryptoInfo/infoActions';

const CryptoInfo = () => {
  const state = useSelector(state => state.infoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoInfo(state.cryptoId));
  }, [state.cryptoId]);
  const { cryptoInfo, loading } = state;

  return (
    loading ? <Loading /> : (
      <div className={css.container}>
        {cryptoInfo.map(coinInfo => {
          const {
            volume_traded: volume,
            price_high: high,
            price_low: low,
            price_close: close,
          } = coinInfo;
          return (
            <div key={volume} className="container">
              <h2>{high}</h2>
              <p>{low}</p>
              <h3>{close}</h3>
            </div>
          );
        })}
      </div>
    )
  );
};

export default CryptoInfo;
