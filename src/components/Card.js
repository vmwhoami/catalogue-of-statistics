import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import card from '../styles/card.module.css';

const Card = ({ coin, createCoinID }) => {
  const {
    asset_id: id, name, price_usd: price,
  } = coin;
  const url = 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/';

  let { id_icon: icon } = coin;
  if (icon) {
    icon = icon.split('-').join('');
  }

  return (
    <Link to={`/${id}`}>
      <div
        className={card.card}
        onClick={() => createCoinID(id)}
        onKeyDown={() => createCoinID(id)}
        aria-hidden="true"
      >
        <img src={`${url + icon}.png`} alt={name + icon} />
        <p>{id}</p>
        <h2>{name}</h2>
        <h3>
          {price.toFixed(2)}
          $
        </h3>
      </div>
    </Link>
  );
};

Card.propTypes = {
  createCoinID: PropTypes.func.isRequired,
  coin: PropTypes.shape({
    asset_id: PropTypes.string.isRequired,
    price_usd: PropTypes.number.isRequired,
    id_icon: PropTypes.string,
    name: PropTypes.string,

  }).isRequired,
};

export default Card;
