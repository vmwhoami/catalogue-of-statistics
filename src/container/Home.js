import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCrypto } from '../redux/crypto';

const Home = ({ fetchCrypto }) => {

  useEffect(() => {
    fetchCrypto();
  }, []);
  return (
    <>
      <h1>
        Hello i guess
      </h1>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCrypto: () => {
    dispatch(fetchCrypto());
  },
});

Home.propTypes = {

  fetchCrypto: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Home);
