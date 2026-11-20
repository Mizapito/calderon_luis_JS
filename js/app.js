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
    4. Salir y mostar el resumen final 
     Seleccione una opcion:`
    );

    switch (opcion) {
      case "1":
        alert("Comprando boleto");
        comprarEntradas();
        break;
      case "2":
        consultarCupos();
        break;
      case "3":
        consultarIngresos();
        break;
      case "4":
        mostrarResumenFinal();
        break;
      default:
        alert("Opcion invalida. Intente nuevamente.");
    }
} while (opcion !== "4");

function obtenerDescuento(tipo) {
  if (tipo === 1) return desEstudiante;
  if (tipo === 2) return desDocente;
  if (tipo === 3) return 0;
  return null;
}

function comprarEntradas() {
  const nombre = prompt("Ingrese el nombre del comprador:");
  if (nombre === "") {
    alert("Compra rechazada: debe ingresar un nombre.");
    return;
  }

  const tipoIngresado = Number(prompt(
    `Ingrese el tipo de participante 
1. Estudiante 
2. docente 
3. publico general
    Ingrese una opcion:`));
  const descuentoPorcentaje = obtenerDescuento(tipoIngresado);

  if (descuentoPorcentaje === null) {
    alert("Compra rechazada: tipo de participante no valido.");
    return;
  }

  const cantidad = Number(prompt(`Ingrese el numero de entradas (maximo ${entradasMax} entradas):`));

  if (cantidad < 1 || cantidad > entradasMax) {
    alert(`Compra rechazada: la cantidad debe ser un numero entero entre 1 y ${entradasMax}`);
    return;
  }

  if (cantidad > cuposDisponibles) {
    alert(`Compra rechazada: solo quedan ${cuposDisponibles} cupos disponibles`);
    return;
  }

  const subtotal = cantidad * precio;
  const descuento = subtotal * descuentoPorcentaje;
  const total = subtotal - descuento;

  cuposDisponibles -= cantidad;
  entradasVendidas += cantidad;
  ingresosAcumulados += total;
  comprasRealizadas += 1;

  const nombreTipo = descuentoPorcentaje === desEstudiante ?
      "Estudiante" : descuentoPorcentaje === desDocente ? "Docente" : "Publico general";

  alert(`RESUMEN DE LA COMPRA
    Nombre: ${nombre}
    Tipo de participante: ${nombreTipo}
    Cantidad de entradas: ${cantidad}
    Subtotal: ${subtotal} $
    Descuento es del ${(descuentoPorcentaje * 100)} %: ${descuento} $
    Total a pagar: $${total} $
    Compra realizada exitosamente`);
  console.log(`RESUMEN DE LA COMPRA
    Nombre: ${nombre}
    Tipo de participante: ${nombreTipo}
    Cantidad de entradas: ${cantidad}
    Subtotal: ${subtotal} $
    Descuento es del ${(descuentoPorcentaje * 100)} %: ${descuento} $
    Total a pagar: $${total} $
    Compra realizada exitosamente`);
}

function consultarCupos() {
  let estado;
  if (cuposDisponibles > 10) {
    estado = "Cupos disponibles";
  } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
    estado = "Ultimos cupos disponibles";
  } else {
    estado = "Evento agotado";
  }

  alert(`CUPOS DISPONIBLES
    Cupos restantes: ${cuposDisponibles}
    Estado: ${estado}`);
  console.log(`Cupos disponibles: ${cuposDisponibles} - ${estado}`);
}

function consultarIngresos() {
  alert(`INGRESOS ACTUALES
    Total de entradas vendidas: ${entradasVendidas}
    Total de ingresos acumulados: ${ingresosAcumulados} $
    Numero de compras realizadas: ${comprasRealizadas}`);
  console.log(`Entradas vendidas: ${entradasVendidas} | Ingresos: ${ingresosAcumulados} | Compras: ${comprasRealizadas}`);
}

function mostrarResumenFinal() {
  alert(`RESUMEN FINAL DEL SISTEMA
    Compras realizadas: ${comprasRealizadas}
    Total de entradas vendidas: ${entradasVendidas}
    Total de ingresos acumulados: ${ingresosAcumulados} $
    Cupos restantes: ${cuposDisponibles}
    Saliendo del sistema...`);
  console.log(`Resumen final
     Compras: ${comprasRealizadas}
     Entradas: ${entradasVendidas}
     Ingresos: ${ingresosAcumulados}
     Cupos: ${cuposDisponibles}`);
}
