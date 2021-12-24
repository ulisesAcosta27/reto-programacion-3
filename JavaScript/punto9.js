let valorNumerico = [];
for(let i = 1; i <= 10; i++){
    const numerosAgregados = parseInt(prompt('ingrese el multiplo'));
    valorNumerico.push(numerosAgregados)
};

let [,,,,,a,b,c,d,e] = valorNumerico;
console.log(a+b+c+d+e);