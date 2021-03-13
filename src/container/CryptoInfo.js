import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoInfo } from '../redux/cryptoInfo/infoActions';

const CryptoInfo = () => {
  const state = useSelector(state => state.infoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoInfo(state.cryptoId));
  }, [state.cryptoId]);
  return (<h2>CryptoInfo</h2>);
};

export default CryptoInfo;
