const a = 20;
const b = 90;
const c = 70;

var result;

if( a + b + c === 180 && a > 0 && b > 0 && c > 0){
    result = true;
}
else if( a < 0 || b < 0 || c < 0){
    result = false;
}
else{
    result = Error;
}

console.log(result);