// Para fixar

const wakeUp = () => 'Acordou!!';
const breakfast = () => 'Bora tomar café!!';
const toSleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(breakfast);
doingThings(toSleep);

// Agora a prática

// Exercício 1

const users = (name, lastName) => {
    const object = {
        nomeCompleto: `${name} ${lastName}`,
        email: `${name}_${lastName}@trybe.com`.toLowerCase(),
    };
    return object;
}

const newEmployees = () => {
    const employees = {
        id1: users('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: users('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: users('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());

// Exercício 2

const numberGenerator = () => {
    return Math.round(Math.random() * 5);
}

const drawResult = (number) => {
    if (numberGenerator() === number) {
        return "Parabéns você ganhou";
    }
    return "Tente novamente";
}

console.log(drawResult(4));

// Exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const points = (element1, element2) => {
    let result = 0;
    for (let i = 0; i < element1.length; i += 1) {
        if (element1[i] !== 'N.A' && element2[i] !== 'N.A' && element1[i] === element2[i]){
            result += 1;
        }
        if (element1[i] !== 'N.A' && element2[i] !== 'N.A' && element1[i] !== element2[i]){
            result -= 0.5;
        }
    }
    return result;
}

const evaluator = (element1, element2, action) => console.log(action(element1, element2));

evaluator(RIGHT_ANSWERS, STUDENT_ANSWERS, points);
