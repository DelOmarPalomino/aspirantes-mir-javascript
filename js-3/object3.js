let receta = {};

receta.nombre = "Sandwich";

receta.ingredientes = [];

receta.ingredientes.push({ nombre: "Pan", cantidad: 2 });

receta.ingredientes.push({ nombre: "Queso", cantidad: 1 });

console.log(receta.ingredientes[0].nombre);

let total = 0;
receta.ingredientes.forEach(ingrediente => {
    total += ingrediente.cantidad;
});
console.log("Cantidad total de ingredientes: " + total);

