import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import home from '../styles/home.module.css';
import Loading from '../components/Loading';
import Card from '../components/Card';
import { fetchCrypto } from '../redux/crypto/cryptoActions';
import { getCoinId } from '../redux/cryptoInfo/infoActions';
import Errorpage from '../components/Errorpage';

const Home = () => {
  const state = useSelector(state => state.cryptoReducer);
  const {
    crypto, loading, filter, error,
  } = state;
  const dispact = useDispatch();
  useEffect(() => {
    dispact(fetchCrypto());
  }, []);
  const createCoinID = id => {
    dispact(getCoinId(id));
  };
  if (error) {
    return <Errorpage />;
  }
  return (
    loading ? <Loading /> : (
      <article className={home.container}>
        {crypto.filter(coin => {
          switch (filter) {
            case 'MORE THAN 10$':
              return coin.price_usd > 10;
            case 'MORE THAN 50$':
              return coin.price_usd > 50;
            case 'MORE THAN 100$':
              return coin.price_usd > 100;
            case 'MORE THAN 200$':
              return coin.price_usd > 200;
            case 'MORE THAN 1000$':
              return coin.price_usd > 1000;
            default:
              return true;
          }
        }).map(coin => (
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
