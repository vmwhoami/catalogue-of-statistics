import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/crypto/cryptoActions';

const PriceFilter = ({ changeFilter }) => {
  const priceRanges = ['ALL', 'MORE THAN 10$', 'MORE THAN 50$', 'MORE THAN 100$', 'MORE THAN 200$', 'MORE THAN 1000$'];
  const handleFilterChanges = str => {
    changeFilter(str);
  };
  return (
    <select className="select" onChange={e => handleFilterChanges(e.currentTarget.value)}>
      <option value="ALL">All</option>
      {priceRanges.map(priceRange => (
        <option value={priceRange} key={priceRange}>
          {priceRange}
        </option>
      ))}
    </select>
  );
};

PriceFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = () => dispatch => ({
  changeFilter: str => {
    dispatch(changeFilter(str));
  },
});
export default connect(null, mapDispatchToProps)(PriceFilter);
