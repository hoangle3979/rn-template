/* eslint-disable one-var */
let _token, _deviceId;
export const setToken = token => {
  _token = token;
};

export const getToken = () => _token;

export const setDeviceId = deviceId => {
  _deviceId = deviceId;
};
export const getDeviceId = () => _deviceId;
