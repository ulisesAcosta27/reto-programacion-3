const employersNumbers = [];
let start = 1;

while (start < 4) {
    const employerSalary = parseInt(prompt('por favor ingrese el salario de los trabajadores'));
    employersNumbers.push(employerSalary);
    start++;
};
console.log(employersNumbers)
let start2 = 0;

let salarioMenor = 0;
let salarioMayor = 0;

while (start2 < employersNumbers.length){
    if(employersNumbers[start2] > 99 && employersNumbers[start2] < 299){
        salarioMenor++;
    }else{
        salarioMayor++;
    }
    start2++;
};

const sueldoTotales = employersNumbers.reduce((a, b) =>{
    return a + b
});
alert(`los empleado que ganan estre 100 y 300: ${salarioMenor} y los que ganan mas de 300 son: ${salarioMayor}`);
alert(`la cantidad de dinero que gasta la empres en sueldos es de: ${sueldoTotales}`)