import axios from 'axios';
import * as act from '../redux/actionTypes';

const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://rest.coinapi.io/'