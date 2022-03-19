function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function days() {
    let daySelector = document.getElementById('days');
    for (let index in dezDaysList) {
        let day = dezDaysList[index];
        let dayCreate = document.createElement('li');
        dayCreate.classList = 'day';
        dayCreate.innerText = day;
        daySelector.appendChild(dayCreate);
    }
}

function daysAndHoliday(quantidadeDeDiasMesAnterior, diasDoFeriado) {
    days();
    let daySelector = document.getElementsByClassName('day');
    for (let index = quantidadeDeDiasMesAnterior; index < dezDaysList.length; index += 1) {
        let dayNumberSelector = daySelector[index].innerText;
        for (let index2 in diasDoFeriado) {
            if (dayNumberSelector == diasDoFeriado[index2]) {
                daySelector[index].classList.add('holiday');
            }
        }
    }
}

daysAndHoliday(2, [24, 25, 31]);

function friday(sextaFeiraDoMes) {
    let daySelector = document.getElementsByClassName('day');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dayNumberSelector = daySelector[index].innerText;
        for (let index2 in sextaFeiraDoMes) {
            if (dayNumberSelector == sextaFeiraDoMes[index2]) {
                daySelector[index].classList.add('friday');
            }
        }
    }
}

friday([4, 11, 18, 25]);

//Exercício 2 e Exercício 4

function buttonCreate(parent, nomeDoButton, nomeDaId) {
    let parentSelector = document.querySelector(parent);
    let buttonCreate = document.createElement('button');
    buttonCreate.innerText = nomeDoButton;
    buttonCreate.id = nomeDaId
    parentSelector.appendChild(buttonCreate);
}

buttonCreate('.buttons-container', 'Feriados', 'btn-holiday');
buttonCreate('.buttons-container', 'Sexta-feira', 'btn-friday');

//Exercício 3

function holidayColor() {
    let holidaySelector = document.getElementsByClassName('holiday');

    for (let index = 0; index < holidaySelector.length; index += 1) {
        let day = holidaySelector[index];
        if (day.style.background == '') {
            day.style.background = 'white';
        }
        else {
            day.style.background = ''
        }
    }
}

let buttonHolidaySelector = document.getElementById('btn-holiday');
buttonHolidaySelector.addEventListener('click', holidayColor);

//Exercício 5

function sextaFeiraDoMes() {
    let fridaySelector = document.getElementsByClassName('friday');
    let save = []

    for (let index = 0; index < fridaySelector.length; index += 1) {
        let texto = fridaySelector[index].innerText;
        save.push(texto);
    }

    return save;
}

function sextaFeira() {
    let fridaySelector = document.getElementsByClassName('friday');

    for (index = 0; index < dias.length; index += 1) {
        let texto = fridaySelector[index].innerText;
        if (texto == 'Sexta-feira') {
            fridaySelector[index].innerText = dias[index];
        }
        else {
            fridaySelector[index].innerText = 'Sexta-feira';
        }
    }
}

let buttonFridaySelector = document.getElementById('btn-friday');
let dias = sextaFeiraDoMes();
buttonFridaySelector.addEventListener('click', sextaFeira);

//Exercício 6

function aumentarFonte(event) {
    event.target.style.fontSize = '30px';
}

function diminuirFonte(event) {
    event.target.style.fontSize = '';
}

let ulSelector = document.getElementsByClassName('day');
for (index = 0; index < ulSelector.length; index += 1) {
    ulSelector[index].addEventListener('mouseover', aumentarFonte);
    ulSelector[index].addEventListener('mouseout', diminuirFonte);
}

//Exercício 7

function minhasTarefas(tarefa) {
    let selecionador = document.querySelector('.my-tasks');
    let criarSpan = document.createElement('span');
    criarSpan.innerText = tarefa;
    selecionador.appendChild(criarSpan);
}

minhasTarefas('Projeto:');

//Exercício 8

function addCor(cor) {
    let selecionador = document.querySelector('.my-tasks');
    let criarDiv = document.createElement('div');
    criarDiv.className = 'task';
    criarDiv.style.backgroundColor = cor;
    selecionador.appendChild(criarDiv);
}

addCor('green');

//Exercício 9

function seletorTask(event) {
    let seletorDoEvento = event.target.className
    if (seletorDoEvento == 'task') {
        event.target.className = 'task selected';
    }
    else {
        event.target.className = 'task';
    }
}

let seletorClasseTask = document.getElementsByClassName('task');
for (index2 = 0; index2 < seletorClasseTask.length; index2 += 1) {
    seletorClasseTask[index2].addEventListener('click', seletorTask);
}

//Exercício 10

function marcarNoCalendario(event) {
    let pai = document.getElementsByClassName('task selected');

    if (pai.length > 0) {
        let cor = pai[0].style.backgroundColor;
        let paiDoDia = event.target.style.color;
        event.target.style.color = cor;
        if (paiDoDia !== '') {
            event.target.style.color = '';
        }
    }
    else {
        alert('Selecionar tarefa!');
    }

}

let ulSelector2 = document.getElementsByClassName('day');
for (index = 0; index < ulSelector2.length; index += 1) {
    ulSelector2[index].addEventListener('click', marcarNoCalendario);
}
















