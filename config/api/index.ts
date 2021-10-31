import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean,
  serverToken?: string
}

export default async function callAPI({
  url, method, data, token, serverToken,
}: CallAPIProps) {
  let headers = {};

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  const axiosResponse = response.data;

  if (response.status > 300) {
    const res = {
      error: true,
      message: axiosResponse.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);
  const res = {
    error: false,
    message: 'success',
    data: length > 1 ? axiosResponse : axiosResponse.data,
  };

  return res;
}
