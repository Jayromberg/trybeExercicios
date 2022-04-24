// apiScript.js     
const API_URL = 'https://api.coincap.io/v2/assets';
const coinContainer = document.getElementById('coinContainer');

const fetchCoin = () => {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data.data.forEach(element => {
            const create = document.createElement('p');
            create.innerHTML = `${element.name} (${element.symbol}): ${element.priceUsd}`;
            coinContainer.appendChild(create);  
        }));
};

window.onload = () => fetchCoin();