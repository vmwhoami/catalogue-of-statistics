import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../actions';

const Home = ({ data, fetchData }) => {
  console.log(data.slice(0, 5));
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {
        data.filter(crypto => crypto.type_is_crypto === 1)
          .map(crypto => <p key={crypto.id_icon}>{crypto.name}</p>)
      }
    </>
  );
};

const mapStateToProps = state => ({
  data: state.dataReducer.data,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(fetchData());
  },
});

Home.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  fetchData: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
