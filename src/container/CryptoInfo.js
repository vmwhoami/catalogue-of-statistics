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
          const { volume_traded: volume } = coinInfo;
          return (
            <h2 key={volume}>hello</h2>
          );
        })}
      </div>
    )
  );
};

export default CryptoInfo;
