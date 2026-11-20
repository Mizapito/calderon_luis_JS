# calderon_luis_JS
# Sistema Innova ESPE 2026

Prototipo en JavaScript nativo desarrollado mediante `prompt()`, `alert()` y `console.log()` para gestionar la compra de entradas, calcular descuentos y controlar los cupos disponibles del evento Innova ESPE 2026.

## Estructura del repositorio

- `index.html`: Archivo base que carga el script del sistema.
- `js/`: Carpeta con el codigo en JavaScript del prototipo.
- `README.md`: Documentacion del proyecto.

## Parametros iniciales

- Precio por entrada: $20
- Cupos iniciales: 50
- Maximo de entradas por compra: 5
- Descuento para estudiantes (opcion 1): 30 %
- Descuento para docentes (opcion 2): 15 %
- Descuento para publico general (opcion 3): 0 %

## Funcionalidades del menu principal

1. **Comprar entradas**: Solicita nombre del comprador, tipo de participante y cantidad de entradas. Valida que la cantidad este entre 1 y el maximo permitido y que existan cupos suficientes antes de calcular subtotal, descuento y total, y actualizar los contadores.
2. **Consultar cupos disponibles**: Muestra los cupos restantes y su estado (`Cupos disponibles` con mas de 10 cupos, `Ultimos cupos disponibles` entre 1 y 10 cupos, o `Evento agotado` con 0 cupos).
3. **Consultar ingresos acumulados**: Muestra el total de entradas vendidas, los ingresos acumulados y el numero de compras realizadas.
4. **Salir**: Muestra el resumen final del sistema y cierra el ciclo del menu.

## Escenarios de validacion

- Compra de 3 entradas como estudiante: Total $42.
- Compra de 2 entradas como docente: Total $34.
- Compra de 1 entrada como publico general: Total $20.
- Solicitud de 0 entradas: Rechaza la compra sin modificar cupos, ingresos ni contadores.
- Solicitud de 6 entradas: Rechaza la compra sin modificar cupos, ingresos ni contadores.
- Ingreso de texto en lugar de cantidad: Rechaza la compra sin modificar cupos, ingresos ni contadores.
- Solicitud superior a los cupos restantes: Rechaza la compra sin modificar cupos, ingresos ni contadores.
- Opcion de menu inexistente: Muestra mensaje de error y mantiene el menu activo.
- Opcion 4: Muestra el resumen final y finaliza el sistema.
