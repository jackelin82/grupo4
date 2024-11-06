// Función que calcula el factorial de un número
function factorial(n) {
    // Si n es 0 o 1, devuelve 1 (casos base del factorial)
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    // Calcula el factorial multiplicando todos los números hasta n
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Función que genera una nueva pregunta con su respuesta
function generarPregunta() {
    // Generar un número aleatorio entre 0 y 10 (para factoriales de 0 a 10)
    const numero = Math.floor(Math.random() * 11); 

    // Calcular el factorial de ese número
    const resultadoCorrecto = factorial(numero);

    // Mostrar la pregunta en el div con id 'sec'
    const preguntaDiv = document.getElementById("sec");
    preguntaDiv.textContent = `¿Cuál es el factorial de ${numero}?`;

    // Obtener el div donde se mostrarán las opciones de respuesta
    const opcionesDiv = document.getElementById("textbo");
    opcionesDiv.innerHTML = ""; // Limpiar las opciones anteriores

    // Crear un array de respuestas, comenzando con la respuesta correcta
    const respuestas = [resultadoCorrecto];

    // Añadir respuestas incorrectas aleatorias
    while (respuestas.length < 4) {
        // Generar una respuesta incorrecta aleatoria
        const respuestaIncorrecta = Math.floor(Math.random() * 100); 
        // Asegurarse de que la respuesta incorrecta no se repita
        if (!respuestas.includes(respuestaIncorrecta)) { 
            respuestas.push(respuestaIncorrecta);
        }
    }

    // Barajar las respuestas para que no siempre estén en el mismo orden
    respuestas.sort(() => Math.random() - 0.5);

    // Crear un botón para cada respuesta
    respuestas.forEach(respuesta => {
        const boton = document.createElement("button"); // Crear un nuevo botón
        boton.textContent = respuesta; // Establecer el texto del botón con la respuesta
        // Asociar la función de verificación al botón (cuando se hace clic)
        boton.onclick = () => verificarRespuesta(respuesta, resultadoCorrecto);
        // Añadir el botón al contenedor de opciones
        opcionesDiv.appendChild(boton);
    });

    // Limpiar cualquier resultado anterior
    document.getElementById("resultado").textContent = "";
}

// Función que verifica si la respuesta del usuario es correcta
function verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
    const resultadoDiv = document.getElementById("resultado");
    // Si la respuesta del usuario es correcta
    if (respuestaUsuario === respuestaCorrecta) {
        resultadoDiv.textContent = "¡Correcto!"; // Mostrar "Correcto" en verde
        resultadoDiv.style.color = "green"; // Cambiar color a verde
    } else {
        // Si la respuesta es incorrecta, mostrar la respuesta correcta
        resultadoDiv.textContent = `Incorrecto. La respuesta correcta era: ${respuestaCorrecta}.`;
        resultadoDiv.style.color = "red"; // Cambiar color a rojo
    }
}
