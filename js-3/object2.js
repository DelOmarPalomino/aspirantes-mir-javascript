const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Bogotá",
    profesion: "Ingeniero"
};

console.log(persona);

function presentacion(persona) {
    return "Mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad;
}

const mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["leer", "pintar", "viajar"];

console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}

