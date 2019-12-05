/* eslint-disable no-param-reassign */
import axios from 'axios';
import {getToken} from '../../configs';
import Config from 'react-native-config';

const _api = axios.create({
  baseURL: Config.BASE_URL
});

_api.interceptors.request.use(
  config => {
    config.headers.common['secret_key'] = Config.SECRET_KEY;
    if (getToken()) {
      config.headers.token = getToken();
    }
    return config;
  },
  error => Promise.reject(error)
);
_api.interceptors.response.use(
  response => {
    const result = response.data;
    if (!result.success) {
      throw result;
    }
    return result;
  },
  error => Promise.reject(error)
);

export {_api};
