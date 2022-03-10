//Execício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

//Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma = soma + numbers[index];
}
console.log(soma);

//Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma = soma + numbers[index];
}
console.log(soma / numbers.length);

//Exercício 4 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma = soma + numbers[index];
}

let result = soma / numbers.length;

if (result > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}

//Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highestValue = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > highestValue) {
        highestValue = numbers[index];
    }
}

console.log(highestValue);

//Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddValues = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 1) {
        oddValues++;
    }
}

if (oddValues === 0) {
    console.log('nenhum valor ímpar encontrado');
}
else {
    console.log(oddValues);
}

//Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerValue = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < lowerValue) {
        lowerValue = numbers[index];
    }
}

console.log(lowerValue);

//Exercício 8

let values = [];

for (let index = 1; index <= 25; index++) {
    values.push(index);
}

console.log(values);

//Exercício 9

let dividedValue = [];

for (let index2 = 0; index2 < values.length; index2++) {
    dividedValue.push((values[index2] / 2))
}

console.log(dividedValue);

//Bonus 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index++) {
    for (let secondIndex = 0; secondIndex < index; secondIndex++) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

//Bonus 2 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index++) {
    for (let secondIndex = 0; secondIndex < index; secondIndex++) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

// Bonus 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index = 1; index <= numbers.length; index++) {
    if (index < numbers.length) {
        let multiplication = numbers[index] * numbers[index - 1];
        newNumbers.push(multiplication);
    }
    else {
        let multiplication = numbers[index - 1] * 2
        newNumbers.push(multiplication);
    }
}

console.log(numbers);
console.log(newNumbers);