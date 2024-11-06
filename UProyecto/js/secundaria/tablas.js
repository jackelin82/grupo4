// Función que genera una tabla de multiplicar basada en el número ingresado por el usuario
function generarTabla() {
    // Obtiene el número ingresado en el campo de entrada con id 'numero' y lo convierte a entero
    const numero = parseInt(document.getElementById("numero").value);
    // Obtiene el contenedor de la tabla de multiplicar (div con id 'tablaMultiplicar')
    const tablaDiv = document.getElementById("tablaMultiplicar");
    // Limpia el contenido anterior de la tabla
    tablaDiv.innerHTML = "";

    // Verifica si el número ingresado es un valor válido (no NaN)
    if (!isNaN(numero)) {
        // Crea la tabla de multiplicar del número ingresado
        for (let i = 1; i <= 10; i++) {
            // Crea una fila (tr) para cada multiplicación
            const fila = document.createElement("tr");

            // Crea la primera celda (td) para mostrar la multiplicación
            const celda1 = document.createElement("td");
            // Define el contenido de la celda como la expresión de la multiplicación
            celda1.textContent = `${numero} x ${i}`;
            // Añade la primera celda a la fila
            fila.appendChild(celda1);

            // Crea la segunda celda (td) para mostrar el resultado de la multiplicación
            const celda2 = document.createElement("td");
            // Define el contenido de la celda como el resultado de la multiplicación
            celda2.textContent = numero * i;
            // Añade la segunda celda a la fila
            fila.appendChild(celda2);

            // Añade la fila completa a la tabla
            tablaDiv.appendChild(fila);
        }
    } else {
        // Si el número ingresado no es válido, muestra un mensaje de error en la tabla
        tablaDiv.innerHTML = "<tr><td colspan='2'>Por favor, ingrese un número válido.</td></tr>";
    }
}
