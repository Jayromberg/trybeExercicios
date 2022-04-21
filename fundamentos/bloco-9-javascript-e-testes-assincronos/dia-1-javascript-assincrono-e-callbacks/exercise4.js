const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

function sendMarsTemperature(callbackTemperature, callbackMessageDelay) {
    setTimeout(() => console.log(`Mars temperature is: ${callbackTemperature()} degree Celsius`), callbackMessageDelay())
}; // imprime "Mars temperature is: 20 degree Celsius", por exemplo

sendMarsTemperature(getMarsTemperature, messageDelay);