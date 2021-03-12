import React from 'react';
import PropTypes from 'prop-types';

import card from '../styles/card.module.css';

const Card = ({ coin }) => {
  const { asset_id: id, name, price_usd: price } = coin;
  return (
    <div className={card.card}>
      <p>{id}</p>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  );
};

Card.propTypes = {
  coin: PropTypes.shape({
    asset_id: PropTypes.string.isRequired,
    price_usd: PropTypes.number.isRequired,
    name: PropTypes.string,
  }).isRequired,
};

export default Card;
