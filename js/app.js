const precio = 20;
const desEstudiante = 0.30;
const desDocente = 0.15;
const entradasMax = 5;

let cuposDisponibles = 50;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let comprasRealizadas = 0;
let opcion;
do {
  
  opcion = prompt(`SISTEMA INNOVA ESPE 2026 
     1. Comprar entradas
     2. Consultar cupos disponibles
     3. Consultar ingresos acumulados
     4. Salir
     Seleccione una opcion:`
  );

  switch (opcion) {
    case "1":
      alert("Comprando boleto");
      break;
    case "2":
      alert("Cupos disponibles");
      break;
    case "3":
      alert("Ingresos totales");
      break;
    case "4":
      alert("Saliendo");
      break;
    default:
      alert("Opcion invalida. Intente nuevamente.");
  }
} while (opcion !== "4");
