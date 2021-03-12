import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import Card from '../components/Card';

import { fetchCrypto } from '../redux/crypto/cryptoActions';

const Home = () => {
  const dispact = useDispatch();
  useEffect(() => {
    dispact(fetchCrypto());
  }, []);
  const state = useSelector(state => state);
  const { crypto, loading } = state.cryptoReducer;
  console.log(loading);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {crypto.map(coin => <Card key={coin.asset_id} coin={coin} />)}
    </>
  );
};

export default Home;
