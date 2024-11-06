// Función principal que genera una pregunta sobre secuencia aritmética
function preguntaSecuenciaAritmetica() {
    // Generar un número aleatorio entre 1 y 10 (diferencia en la secuencia)
    num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    // Generar una secuencia aritmética con un número aleatorio entre 1 y 10 como inicio
    const secuencia = generarSecuenciaAritmetica(Math.floor(Math.random() * (10 - 1 + 1)) + 1, num, 5);

    // La respuesta correcta será el siguiente número en la secuencia
    respuestaCorrecta = secuencia[secuencia.length - 1] + num;

    // Mostrar la pregunta en la pantalla
    mostrarPregunta(secuencia);
}

// Función que genera una secuencia aritmética
function generarSecuenciaAritmetica(inicio, diferencia, cantidad) {
    const secuencia = [];
    // Llenar la secuencia con los números generados en base a la diferencia
    for (let i = 0; i < cantidad; i++) {
        secuencia.push(inicio + i * diferencia);
    }
    return secuencia;
}

// Función para mostrar la secuencia y la pregunta
function mostrarPregunta(secuencia) {
    // Mostrar la secuencia en el div con id 'sec'
    document.getElementById("sec").textContent = 
        `${secuencia.join(", ")}. ¿Cuál es el siguiente número?`;

    // Generar las opciones de respuesta
    generarOpcionesRespuesta(respuestaCorrecta);
}

// Función que genera las opciones de respuesta para la pregunta
function generarOpcionesRespuesta(correcta) {
    const opcionesDiv = document.getElementById("textbo");
    opcionesDiv.innerHTML = ""; // Limpiar las opciones anteriores

    // Usar un Set para asegurar que no haya respuestas duplicadas
    const respuestas = new Set();
    respuestas.add(correcta); // Agregar la respuesta correcta al conjunto

    // Generar respuestas incorrectas cerca de la respuesta correcta
    while (respuestas.size < 4) {
        // Respuesta incorrecta aleatoria cerca de la correcta
        const respuestaIncorrecta = correcta + Math.floor(Math.random() * 10) - 5; // Número aleatorio entre -5 y 5
        if (respuestaIncorrecta !== correcta) {
            respuestas.add(respuestaIncorrecta); // Añadir solo si no es igual a la correcta
        }
    }

    // Convertir el Set a un array y mezclar las respuestas
    const respuestasArray = Array.from(respuestas).sort(() => Math.random() - 0.5);

    // Crear un botón para cada opción de respuesta
    respuestasArray.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion; // El texto del botón es la opción de respuesta
        // Asociar la función de verificación a cada botón
        boton.onclick = () => verificarRespuesta(opcion);
        // Añadir el botón al div de opciones
        opcionesDiv.appendChild(boton);
    });
}

// Función que verifica si la respuesta seleccionada es correcta
function verificarRespuesta(opcionSeleccionada) {
    const resultadoDiv = document.getElementById("resultado");
    // Si la opción seleccionada es la correcta
    if (opcionSeleccionada === respuestaCorrecta) {
        resultadoDiv.textContent = "¡Correcto! La respuesta es " + respuestaCorrecta + ".";
        resultadoDiv.style.color = "green"; // Mostrar mensaje en verde
    } else {
        // Si la opción es incorrecta
        resultadoDiv.textContent = "Incorrecto. La respuesta correcta era " + respuestaCorrecta + ".";
        resultadoDiv.style.color = "red"; // Mostrar mensaje en rojo
    }
}

// Limpiar el resultado anterior cuando se hace clic en el botón de reiniciar
let init = document.getElementById("init");
let text = document.getElementById("resultado");
init.addEventListener("click", () => {
    text.textContent = " "; // Limpiar el texto del resultado
});
