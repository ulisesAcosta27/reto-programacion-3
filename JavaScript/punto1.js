const listadoNotas = [];
let i = 1;

while (i <= 10) {
  const nota = parseInt(prompt('Ingrese una nota'));
  listadoNotas.push(nota);
  i++; // i = i + 1
}

let j = 0;
let cantMayor = 0;
let cantMenor = 0;

while (j < listadoNotas.length) {
  if (listadoNotas[j] >= 7) {
    cantMayor++;
  } else {
    cantMenor++;
  }
  j++;
}

alert(
  `La cantidad de mayor a 7 es: ${cantMayor} y la cantidad de menores es: ${cantMenor}`
);