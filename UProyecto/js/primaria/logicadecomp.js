// Función que genera una comparación entre dos números aleatorios
function generarComparacion(){
    // Generar dos números aleatorios entre 1 y 10
    let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    // Si los números son iguales, mostrar un mensaje
    if (num1 == num2) {
        document.getElementById("resultado").textContent = `Los números son iguales`;
    } else {
        // Si los números son diferentes, proceder a mostrar la pregunta
        let opcionesDiv = document.getElementById("textbo");
        opcionesDiv.innerHTML = ""; // Limpiar opciones anteriores

        // Mostrar la pregunta en el div con id 'sec'
        document.getElementById("sec").textContent = `Entre ${num1} y ${num2} ¿Qué número es menor?`;

        // Crear un array con los dos números y barajarlos aleatoriamente
        let respuesta = [num1, num2];
        respuesta = Array.from(respuesta).sort(() => Math.random() - 0.5);

        // Crear un botón para cada opción
        respuesta.forEach(opcion => {
            const boton = document.createElement("button");
            boton.textContent = opcion; // El texto del botón será la opción
            boton.onclick = () => verificarRespuesta(opcion, num1, num2); // Llamar a verificarRespuesta al hacer clic
            opcionesDiv.appendChild(boton); // Añadir el botón a la interfaz
        });
    }
}

// Función que verifica la respuesta seleccionada
function verificarRespuesta(opcionSeleccionada, num1, num2) {
    let respuestaCorrecta = 0;

    // Determinar cuál de los dos números es el menor
    if (num1 < num2) {
        respuestaCorrecta = num1;
    } else {
        respuestaCorrecta = num2;
    }

    const resultadoDiv = document.getElementById("resultado");

    // Si la respuesta seleccionada es la correcta
    if (opcionSeleccionada === respuestaCorrecta) {
        resultadoDiv.textContent = "¡Correcto! La respuesta es " + respuestaCorrecta + ".";
        resultadoDiv.style.color = "green"; // Mostrar mensaje en verde
    } else {
        // Si la respuesta es incorrecta
        resultadoDiv.textContent = "Incorrecto. La respuesta correcta era " + respuestaCorrecta + ".";
        resultadoDiv.style.color = "red"; // Mostrar mensaje en rojo
    }
}

// Función para limpiar el resultado cuando se hace clic en el botón de reiniciar
let init = document.getElementById("init");
let text = document.getElementById("resultado");
init.addEventListener("click", () => {
    text.textContent = " "; // Limpiar el texto del resultado
});
