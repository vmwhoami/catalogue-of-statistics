import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import home from '../styles/home.module.css';
import Loading from '../components/Loading';
import Card from '../components/Card';
import { fetchCrypto } from '../redux/crypto/cryptoActions';
import getCoinId from '../redux/cryptoInfo/infoActions';

const Home = () => {
  const dispact = useDispatch();
  useEffect(() => {
    dispact(fetchCrypto());
  }, []);
  const createCoinID = id => {
    dispact(getCoinId(id));
  };
  const state = useSelector(state => state);
  const { crypto, loading } = state.cryptoReducer;
  return (
    loading ? <Loading /> : (
      <article className={home.container}>
        {crypto.map(coin => (
          <Card
            key={coin.asset_id}
            coin={coin}
            createCoinID={createCoinID}
          />
        ))}
      </article>
    )
  );
};

export default Home;
