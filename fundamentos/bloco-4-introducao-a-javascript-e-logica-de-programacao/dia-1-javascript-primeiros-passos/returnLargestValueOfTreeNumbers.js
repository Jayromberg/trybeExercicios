const a = 200;
const b = 50;
const c = 100;

var result;
if(a > b && a > c){
    result = a;
}
else if(b > a && b > c){
    result = b;
}
else{
    result = c;
}
console.log(result);
 