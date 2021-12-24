let personas = {
    nombre: [],
    notas: []
}

let inicio = 1;

while (inicio < 4) {
    const nombre = prompt('porfavor ingrese su nombre')
    personas.nombre.push(nombre);
    const notasPersonas = prompt('por favor ingrese su nota')
    personas.notas.push(notasPersonas)
    inicio++;
};

console.log(personas)