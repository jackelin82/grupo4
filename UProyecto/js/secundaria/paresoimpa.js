// Función que verifica si un número es par (divisible por 2 sin residuo)
function esPar(numero) {
    return numero % 2 === 0; // Si el residuo de la división entre 2 es 0, el número es par
}

// Función principal para generar un número aleatorio y presentar opciones de Par/Impar
function generarpar(){
    // Genera un número aleatorio entre 1 y 100
    let numero = Math.floor(Math.random() * 100) + 1;
    
    // Verifica si el número generado es par
    const esNumeroPar = esPar(numero);

    // Obtiene el contenedor donde se mostrarán las opciones de respuesta (div con id 'textbo')
    let opcionesDiv = document.getElementById("textbo");
    opcionesDiv.innerHTML = ""; // Limpia cualquier contenido anterior

    // Muestra el número generado con el texto "Es Par o Impar"
    document.getElementById("sec").textContent = `${numero} Es Par o Impar`;

    // Crea un arreglo de respuestas, con la opción correcta primero
    const respuestas = [esNumeroPar ? "Par" : "Impar"];
    // La respuesta incorrecta será la contraria a la respuesta correcta
    const respuestaIncorrecta = esNumeroPar ? "Impar" : "Par";
    // Añade la respuesta incorrecta al arreglo
    respuestas.push(respuestaIncorrecta);
    
    // Baraja las respuestas (para que no siempre aparezca la respuesta correcta primero)
    respuestas.sort(() => Math.random() - 0.5);

    // Crea botones para cada respuesta y los añade al div de opciones
    respuestas.forEach(respuesta => {
        const boton = document.createElement("button"); // Crea un botón para cada respuesta
        boton.textContent = respuesta; // Establece el texto del botón como la respuesta
        // Asocia la función de verificación al hacer clic en el botón
        boton.onclick = () => verificarRespuesta(respuesta, esNumeroPar);
        opcionesDiv.appendChild(boton); // Añade el botón al contenedor de opciones
    });

    // Limpia cualquier resultado anterior
    document.getElementById("resultado").textContent = "";

    // Función que verifica si la respuesta del usuario es correcta
    function verificarRespuesta(respuestaUsuario, esNumeroPar) {
        const resultadoDiv = document.getElementById("resultado");
        const respuestaCorrecta = esNumeroPar ? "Par" : "Impar"; // Determina cuál es la respuesta correcta
        // Compara la respuesta del usuario con la respuesta correcta
        if (respuestaUsuario === respuestaCorrecta) {
            // Si la respuesta es correcta, muestra un mensaje en verde
            resultadoDiv.textContent = "¡Correcto!";
            resultadoDiv.style.color = "green";
        } else {
            // Si la respuesta es incorrecta, muestra la respuesta correcta en rojo
            resultadoDiv.textContent = `Incorrecto. La respuesta correcta era: ${respuestaCorrecta}.`;
            resultadoDiv.style.color = "red";
        }
    }
}
