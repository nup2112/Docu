# Manual de Usuario - Sistema Administrativo Maxplay

## Relación de Ticket
Este módulo permite gestionar y visualizar el historial de tickets generados en el sistema.

### 1. Interfaz Principal

![ticket](/web-admin/web(3).png)

#### 1.1 Filtros de Búsqueda
En la parte superior de la página encontramos tres filtros principales:

- **Rango de Fecha**: Permite seleccionar el período específico para la consulta
  - Formato: DD/MM/YYYY
  - Por defecto muestra el rango del mes actual
- **Jugadas**: Desplegable para filtrar por tipo de jugada
  - Opción "TODOS" disponible
- **Moneda**: Selector de tipo de moneda
  - Por defecto: BOLIVARES

#### 1.2 Tabla de Registros
La tabla principal muestra la siguiente información:

| Columna | Descripción |
|---------|-------------|
| Ticket N# | Identificador único del ticket |
| Taquilla | Nombre de la taquilla donde se generó |
| Usuario | Operador que realizó la transacción |
| Fecha | Fecha y hora de la transacción |
| Monto | Valor del ticket en la moneda seleccionada |
| Premio | Monto ganado (si aplica) |
| Sorteos | Cantidad de sorteos jugados |
| Jugadas | Número de apuestas realizadas |
| Tipo | Tipo de juego (ej: ANIMALITO) |
| Estatus | Estado actual del ticket |
| Opciones | Botón "Detalles" para ver información adicional |

### 2. Funcionalidades

#### 2.1 Búsqueda y Filtrado
- Utilice el botón "Buscar" después de configurar los filtros
- La opción "Mostrar X Registros" permite ajustar la cantidad de entradas visibles
- Campo de búsqueda rápida disponible en la esquina superior derecha

#### 2.2 Detalles del Ticket

![ticket](/web-admin/web(2-3).png)

Al hacer clic en el botón "Detalles" se abre una ventana emergente con:
- Número de ticket
- Usuario que lo procesó
- Fecha exacta
- Monto
- Premio (si existe)
- Tipo de juego

### 3. Resumen Totales
En la parte inferior se muestra un panel con estadísticas generales:

![ticket](/web-admin/web(3-2).png)

- **Ventas**: Monto total de tickets vendidos
- **Premios**: Suma total de premios otorgados
- **Tck Vendidos**: Cantidad total de tickets procesados
- **Premios Pendientes**: Tickets ganadores sin cobrar
- **Premios Pagados**: Tickets ganadores ya cobrados
- **Premios Vencidos**: Tickets ganadores fuera de fecha para cobro

### 4. Navegación
- Use los botones "Anterior" y "Siguiente" para moverse entre páginas
- El número de página actual se muestra en azul
- Indicador de registros mostrados en la parte inferior izquierda

### Consejos Útiles
1. Para una búsqueda más eficiente, ajuste primero el rango de fechas
2. Utilice la búsqueda rápida para encontrar tickets específicos
3. Revise el resumen de totales para validar las operaciones del día
4. Mantenga un registro de los tickets con premios pendientes

### Notas Importantes
- Los tickets tienen un período límite para el cobro de premios
- El estatus "Activo" indica que el ticket está vigente
- Todos los montos se muestran en la moneda seleccionada en el filtro
- La información se actualiza en tiempo real
