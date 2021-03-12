import React from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://rest.coinapi.io/';

const fetchData = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `X-CoinAPI-Key: ${apiKey}`,
      },
    });
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};

fetchData();
const Home = () => (
  <h1>Hello from Home</h1>
);

export default Home;
