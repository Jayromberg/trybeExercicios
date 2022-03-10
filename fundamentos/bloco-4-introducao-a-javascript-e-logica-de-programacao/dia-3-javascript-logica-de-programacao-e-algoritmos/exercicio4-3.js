//Exercício 1

let number = 10;
let resultFactorial = 1;

for (let index = 1; index <= number; index++) {
    resultFactorial = resultFactorial * index;
}

console.log(resultFactorial);

//Exercício 2

let word = 'tryber';
let invertedWord = '';

for (let index = word.length - 1; index >= 0; index--) {
    invertedWord = invertedWord + word[index];
}

console.log(invertedWord);

//Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];

for (index = 1; index < array.length; index++) {
    if (biggestWord.length < array[index].length) {
        biggestWord = array[index];
    }
}

console.log(biggestWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallestWord = array[0];

for (index = 1; index < array.length; index++) {
    if (smallestWord.length > array[index].length) {
        smallestWord = array[index];
    }
}

console.log(smallestWord);

//Exercício 4

let primeNumber = 2;
let primeArray = [];

for (index = 2; index <= 50; index++) {
    for (index2 = 1; index2 < index; index2++) {
        if (index % index2 === 0) {
            let counter = 0;
            counter++;
            if(counter === 0){
                primeArray.push(index);
            }
        }
    }
}

console.log(primeArray);
