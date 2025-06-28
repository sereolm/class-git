let meses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function obtenerMes(numero) {
  if (numero < 1 || numero > 12) {
    throw new Error("Número de mes fuera de rango");
  }
  return meses[numero - 1];
}

console.log("Estamos en " + obtenerMes(4)); // Abril
