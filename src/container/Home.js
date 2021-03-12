import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCrypto } from '../redux/crypto/cryptoActions';

const Home = () => {
  const dispact = useDispatch();
  useEffect(() => {
    dispact(fetchCrypto());
  }, []);
  const state = useSelector(state => state);
  const { crypto } = state.cryptoReducer;
  return (
    <>
      {crypto.map(coin => {
        const { asset_id: id, name, price_usd: price } = coin;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{price}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Home;
