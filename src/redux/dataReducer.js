import axios from 'axios';

import LOAD_SUCCESS from './actionTypes';

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
