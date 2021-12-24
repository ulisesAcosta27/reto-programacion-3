const grupoNumeros = [];
let numeroPares = 0;
let numerosImpares = 0;

let inicio = 1;

while(inicio <= 6){
    const ingresarNumeros = parseInt(prompt('ingrese una cadena de numeros'));
    grupoNumeros.push(ingresarNumeros);
    inicio++;
};
let i = 0;
while (i < grupoNumeros.length) {
    if(grupoNumeros[i] % 2 == 0){
        numeroPares++;
    }else{
        numerosImpares++;
    };    
    i++;
}


alert(`la cantidad de valores pares son de: ${numeroPares} y de los numeros impares: ${numerosImpares}`)