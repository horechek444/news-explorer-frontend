import {setToken} from "./utils/token";

export const BASE_URL = 'https://api.horechek-news.students.nomoredomains.work';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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
      'Content-Type': 'application/json'
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
