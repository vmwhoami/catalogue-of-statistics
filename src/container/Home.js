import React from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://rest.coinapi.io/v1/exchanges?apikey=${apiKey}`;

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (e) {
    return e;
  }
};

fetchData().then(res => console.log(res));

const Home = () => (
  <h1>Hello from Home</h1>
);

export default Home;
