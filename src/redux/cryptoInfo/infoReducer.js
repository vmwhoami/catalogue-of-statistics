import GET_ID from './infoActionTypes';

const infoReducer = (state = '', action) => {
  switch (action.type) {
    case GET_ID:
      return action.payload;

    default:
      return state;
  }
};

export default infoReducer;
