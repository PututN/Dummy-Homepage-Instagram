import axios from 'axios';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = 'Bearer ' + token;
  }
  const instance = axios.create({
    baseURL: "https://private-f7452b-pututnardianto.apiary-mock.com",
    headers,
  });
  return instance;
};

export default http;
