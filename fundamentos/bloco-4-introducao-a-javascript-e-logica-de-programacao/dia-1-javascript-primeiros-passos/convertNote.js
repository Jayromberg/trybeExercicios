var note = 100;
var convert; 

if(note >= 90){
    convert = 'A';
}
else if(note >= 80){
    convert = 'B';
}
else if(note >= 70){
    convert = 'C';
}
else if(note >= 60){
    convert = 'D';
}
else if(note >= 50){
    convert = 'E';
}
else{
    convert = 'F';
}

console.log(convert)