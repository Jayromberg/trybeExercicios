// apiScript.js     
const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCoin = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject);
};

window.onload = () => fetchCoin();