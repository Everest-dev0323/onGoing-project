import axios from "axios";
import config from './config';

import { getCookie, deleteAllCookies } from '../utils';

const api = axios.create();

api.interceptors.request.use(
  (request) => {
    let baseURL = config.API_BASE_URL || '';
    request.url = baseURL + request.url;

    // let userInfo = getCookie('userInfo');
    // if (userInfo) {
      // let token = JSON.parse(userInfo).accessToken;
      request.headers = {
        // 'Authorization': `Bearer ${token}`,
        // 'Access-Control-Allow-Origin': '*/*',
        // 'Access-Control-Allow-Credentials': 'true',
        'Content-Type':  'application/json',
        'Accept': '*/*'
      };
    // }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response && error.response.status == '401') {
      console.log('401')
      deleteAllCookies();
      document.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default api;