import {setToken} from "./utils/token";

export const BASE_URL = 'https://api.horechek-news.students.nomoredomains.work';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
      "Access-Control-Max-Age": "86400"
    },
    body: JSON.stringify({email, password, name})
  })
    .then(response => {
      let data = response.json();
      if(!response.ok) {
        return Promise.reject(response.status);
      }
      return data;
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
      "Access-Control-Max-Age": "86400"
    },
    body: JSON.stringify({email, password})
  })
    .then((response => {
      let data = response.json();
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      return data;
    }))
    .then((data) => {
      if (data.token){
        setToken(data.token);
        return data;
      }
    })
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
      "Access-Control-Max-Age": "86400"

    }
  })
    .then((res => {
      let data = res.json();
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return data;
    }))
};

