import axios from 'axios';

// const token=''
const axiosClient = axios.create({
  baseURL: process.env['apiHost'] || '',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: token ? `Bearer ${token}` : '',
  },
});

axiosClient.defaults.withCredentials = true;

export default axiosClient;
