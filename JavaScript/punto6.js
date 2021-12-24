const listaUno = [];
const listaDos = [];
let i = 1;
let i2 = 1;

while (i <= 15) {
    const valorNumerico = parseInt(prompt('Ingrese los numeros de la primera lista'))
    listaUno.push(valorNumerico)
    i++;
};

while (i2 <= 15) {
    const valorNumerico = parseInt(prompt('Ingrese los numeros de la segunda lista'))
    listaDos.push(valorNumerico)
    i2++;
};
const sumaListaUno = listaUno.reduce((a, b) =>  a + b);
const sumaListaDos = listaDos.reduce((a, b) =>  a + b);
console.log(sumaListaUno);
console.log(sumaListaDos);

 if(sumaListaUno == sumaListaDos){
     alert(`la lista uno como la lista dos son iguales`)
 }else if(sumaListaUno > sumaListaDos){
     alert('la lista uno es mayor que la lista dos')
 }else if(sumaListaDos > sumaListaUno){
     alert('la lista dos es mayor que la lista uno')
 }else{
     alert('por favir vuelva a ingresar denuevo los numeros')
 }