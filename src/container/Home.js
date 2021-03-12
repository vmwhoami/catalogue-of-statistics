import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import home from '../styles/home.module.css';
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

  if (loading) {
    return <Loading />;
  }
  return (
    <article className={home.container}>
      {crypto.map(coin => <Card key={coin.asset_id} coin={coin} />)}
    </article>
  );
};

export default Home;
