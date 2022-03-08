var wage = 3000;
var inss;
var ir;

if(wage >= 5189.82){
    inss = 570.88;
}
else if(wage >= 2594.93){
    inss = wage * 0.11
}
else if(wage >= 1556.95){
    inss = wage * 0.09
}
else{
    inss = wage * 0.08
}

var baseSalary = wage - inss;

if(baseSalary >= 4664.68){
    ir = (baseSalary * 0.275) - 869.36; 
}
else if(baseSalary >= 3751.06){
    ir = (baseSalary * 0.225) - 636.13;
}
else if(baseSalary >= 2826.66){
    ir = (baseSalary * 0.15) - 354.80;
}
else if(baseSalary >= 1903.99){
    ir = (baseSalary * 0.075) - 142.80;
}
else{
    ir = 0;
}

var netSalary = baseSalary - ir;
console.log(netSalary);