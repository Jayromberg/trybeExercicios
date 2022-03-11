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
let smallestWord = array[0];

for (index = 1; index < array.length; index++) {
    if (biggestWord.length < array[index].length) {
        biggestWord = array[index];
    }
}

for (index = 1; index < array.length; index++) {
    if (smallestWord.length > array[index].length) {
        smallestWord = array[index];
    }
}

console.log(biggestWord);
console.log(smallestWord);

//Exercício 4

let primeNumbers = 0;
let result = 0;

for(index = 2; index <= 50; index++){
    result = 0;
    for(index2 = 1; index2 <= index; index2++){
        if(index % index2 === 0){
            result++;
        }
    }
    if(result === 2){
        primeNumbers = index;
    }
}

console.log(primeNumbers);

