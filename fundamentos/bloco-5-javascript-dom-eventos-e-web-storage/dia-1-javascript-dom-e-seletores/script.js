/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

// Exercício 1

function texto(tag, position, text) {
    let twoYearsOld = document.getElementsByTagName(tag)[position];
    twoYearsOld.innerText = text;
    return twoYearsOld;
}

texto('p', 1, "Daqui 2 anos quero estar trabalhando com o que amo, a programação!");

//Exercício 2

function changeYellowBackgroundColor(nameClass, color1) {
    let newColor = document.getElementsByClassName(nameClass)[0];
    newColor.style.backgroundColor = color1;
    return newColor;
}

changeYellowBackgroundColor('main-content', 'rgb(76,164,109)');

//Exercício 3

function changeRedBackgroundColor(centerClass, color2) {
    let newColor = document.getElementsByClassName(centerClass)[0];
    newColor.style.backgroundColor = color2;
    return newColor;
}

changeRedBackgroundColor('center-content', 'white');

//Exercício 4

function textCorrector(tag, position, text) {
    let newText = document.getElementsByTagName(tag)[position];
    newText.innerText = text;
    return newText;
}

textCorrector('h1', 0, 'Exercício 5.1 - JavaScript');

//Exercício 5

function upperCase(tag) {
    let temporary = document.getElementsByTagName(tag).length
    for (let index = 0; index < temporary; index += 1) {
        let newText = document.getElementsByTagName(tag)[index];
        newText.innerText = newText.innerText.toUpperCase();
    }
    return;
}

upperCase('p');

//Exercício 6

function textP(tag) {
    let temporary = document.getElementsByTagName(tag).length
    for (let index = 0; index < temporary; index += 1) {
        let textP = document.getElementsByTagName(tag)[index].innerText;
        console.log(textP)
    }
    return;
}

textP('p');
