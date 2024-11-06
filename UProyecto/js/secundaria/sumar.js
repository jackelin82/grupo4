function sumarAleatorios() {
    // Generar dos números aleatorios entre 1 y 50
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;

    // Calcular la suma
    const suma = num1 + num2;

    // Mostrar la pregunta
    const preguntaDiv = document.getElementById("sec");
    preguntaDiv.textContent = `¿Cuánto es ${num1} + ${num2}?`;

    // Generar opciones de respuesta
    const opcionesDiv = document.getElementById("textbo");
    opcionesDiv.innerHTML = ""; // Limpiar opciones anteriores

    // Crear un array de respuestas, incluyendo la correcta
    const respuestas = [suma];

    // Añadir algunas respuestas incorrectas aleatorias
    while (respuestas.length < 4) {
        const respuestaIncorrecta = Math.floor(Math.random() * 100) + 1; // Respuesta aleatoria entre 1 y 100
        if (!respuestas.includes(respuestaIncorrecta)) { // Asegurarse de que no sea duplicada
            respuestas.push(respuestaIncorrecta);
        }
    }

    // Barajar respuestas
    respuestas.sort(() => Math.random() - 0.5);

    // Crear botones para cada respuesta
    respuestas.forEach(respuesta => {
        const boton = document.createElement("button");
        boton.textContent = respuesta;
        boton.onclick = () => verificarRespuesta(respuesta, suma);
        opcionesDiv.appendChild(boton);
    });

    // Limpiar resultado anterior
    document.getElementById("resultado").textContent = "";
}

function verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
    const resultadoDiv = document.getElementById("resultado");
    if (respuestaUsuario === respuestaCorrecta) {
        resultadoDiv.textContent = "¡Correcto!";
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = `Incorrecto. La respuesta correcta era: ${respuestaCorrecta}.`;
        resultadoDiv.style.color = "red";
    }
}
let init=document.getElementById("init")
let text=document.getElementById("resultado")
init.addEventListener("click",()=>{
    text.textContent=" "
})