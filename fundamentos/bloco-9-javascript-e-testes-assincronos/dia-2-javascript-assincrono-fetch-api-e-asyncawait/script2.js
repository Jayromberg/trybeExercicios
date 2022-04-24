// apiScript.js     
const API_URL = 'https://api.coincap.io/v2/assets';
const coinContainer = document.getElementById('coinContainer');

const fetchCoin = async () => {
   await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data.data.forEach((element) => {
            if (Number(element.rank) <= 10) {
                const usdPrice = Number(element.priceUsd);
                const create = document.createElement('p');
                create.innerHTML = `${element.name} (${element.symbol}): ${usdPrice.toFixed(2)}`;
                coinContainer.appendChild(create);
            }
        }))
        .catch((error) => error.toString());
};

window.onload = () => fetchCoin();