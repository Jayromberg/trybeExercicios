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
