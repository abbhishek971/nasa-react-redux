import axios from 'axios';
const apiConfig = require('./apiConfig.json');

export default function fetchData() {
  const API_KEY = apiConfig.key;
  const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
  const request = axios.get(END_POINT+API_KEY);

  return{
    type: "FETCH_DATA",
    payload: request
  }
}
