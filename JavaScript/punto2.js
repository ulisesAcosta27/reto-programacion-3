const alturaPersona = [];
let i = 1;

while (i < 4) {
    const medidasPersonas = parseInt(prompt('por favor ingrese su altura en medidas'));
    alturaPersona.push(medidasPersonas);
    i++;
};
const sumaDeMedidas = alturaPersona.reduce((firstElement, secondElement) =>{
    return firstElement + secondElement
});
const promedioAltura = Math.round(sumaDeMedidas / alturaPersona.length);
console.log(`la altura promedio de todas las personas son de: ${promedioAltura}cm`);