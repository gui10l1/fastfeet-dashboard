import axios from 'axios';

export const fastFeetApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
