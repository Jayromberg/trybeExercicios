// a gente vai ter 3 buttons
// o primeiro button vai ser responsavel por pegar o valor de um input e apresentar em tela 
// o segundo vai ser responsavel por salvar no local storage 
// e teremos que manter esse dado em tela apos a pagina ser recarregada
// e o terceiro ele vai remover tudo do local storage e zerar a tag de texto (tira o texto que tem lá dentro)
// quando clicar duas vezes no texto fica maiusculo e ao clicar uma vez fica minusculo 



const buttonAdicionarNaTela = document.getElementById('1');
console.log(buttonAdicionarNaTela);
const buttonSalvar = document.getElementById('2');
const buttonDeletar = document.getElementById('3');
const texto = document.getElementById('texto');
const input = document.getElementById('input');
const containerTexto = document.getElementById('container-texto');




function adicionarTextoNaTela() {
  console.log(input.value);
  texto.innerText = input.value;
};

function salvar() {
  const saveItem = localStorage.setItem('frase', input.value);
  return saveItem;
};

//Apresentar dados em tela

function apresentaMensagem() {
  const storage = localStorage.getItem('frase');
  texto.innerText = storage;
}

// remover itens do localStorage

function removerItens() {
  localStorage.removeItem('frase');
  texto.innerText = "";
}

// dbl click deixa maisculos
function transformaUppercase(event) {
  console.log(event.target);
  const textoFormatado = event.target.innerText.toUpperCase();
  texto.innerText = textoFormatado;
}

function transformaLowerCase(event) {
  const textoFormatado = event.target.innerText.toLowerCase();
  texto.innerText = textoFormatado;
}


// EXTRA SE DER TEMPO, trocar a cor dos buttons 
// function colorsButton(event) {
//   const colorClass = document.querySelector('.color-button');
//   console.log(colorClass)
//   colorClass.classList.remove('color-button');
//   event.target.classList.add('color-button');
// }

// const buttons = document.getElementsByClassName('buttons');
// for (let index = 0; index < buttons.length; index += 1) {
//   buttons[index].addEventListener('click', colorsButton);
// }


buttonAdicionarNaTela.addEventListener('click', adicionarTextoNaTela);
buttonSalvar.addEventListener('click', salvar);
buttonDeletar.addEventListener('click', removerItens);
containerTexto.addEventListener('mouseover', transformaUppercase);
containerTexto.addEventListener('click', transformaLowerCase);


window.onload = apresentaMensagem;