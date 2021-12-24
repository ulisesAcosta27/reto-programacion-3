const contador = [];
const numeroOnce = 11;
let inicio = 1;

while (inicio <= 25) {
    const sumaDeNumeros = inicio * numeroOnce;
    contador.push(sumaDeNumeros);
    inicio++;
};
console.log(contador)