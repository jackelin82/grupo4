// Array de afirmaciones con su respectiva respuesta (verdadera o falsa)
const afirmaciones = [
    { texto: "La Tierra es plana.", esVerdadera: false },
    { texto: "El agua hierve a 100 grados Celsius.", esVerdadera: true },
    { texto: "Los gatos son reptiles.", esVerdadera: false },
    { texto: "La capital de Francia es París.", esVerdadera: true },
    { texto: "Los delfines son mamíferos.", esVerdadera: true },
    { texto: "Si llueve mañana, cancelaremos el picnic.", esVerdadera: true },
    { texto: "Los pingüinos pueden volar.", esVerdadera: false },
    { texto: "Si comes demasiada azúcar, te dolerá el estómago.", esVerdadera: true },
    { texto: "Si llueve hoy, no voy al parque.", esVerdadera: true },
    { texto: "Si la lluvia cae, el jardín florecerá.", esVerdadera: true },
    { texto: "Si tienes hambre, comerás algo.", esVerdadera: false }, // Aquí hay un pequeño error lógico, ya que generalmente "tener hambre" suele llevar a comer algo
];

// Función para mostrar una afirmación aleatoria en el DOM
function mostrarAfirmacion() {
    // Selecciona un índice aleatorio del array de afirmaciones
    const indiceAleatorio = Math.floor(Math.random() * afirmaciones.length);
    const afirmacion = afirmaciones[indiceAleatorio];

    // Muestra la afirmación seleccionada en el elemento con id 'sec'
    document.getElementById("sec").textContent = afirmacion.texto;
    // Limpia cualquier resultado previo
    document.getElementById("resultado").textContent = ""; 
    // Muestra los botones de "verdadero" y "falso"
    document.getElementById("verdadero").style.display = "inline"; 
    document.getElementById("falso").style.display = "inline"; 
}

// Función para verificar si la respuesta del usuario es correcta
function verificarRespuesta(respuestaUsuario) {
    // Obtiene el texto actual que se muestra (la afirmación)
    const textoActual = document.getElementById("sec").textContent;
    // Busca la afirmación correspondiente en el array
    const afirmacion = afirmaciones.find(a => a.texto === textoActual);
    // Obtiene el contenedor de resultados
    const resultadoDiv = document.getElementById("resultado");

    // Verifica si la respuesta del usuario es correcta
    if (afirmacion && afirmacion.esVerdadera === respuestaUsuario) {
        // Si es correcta, muestra "¡Correcto!" en verde
        resultadoDiv.textContent = "¡Correcto!";
        resultadoDiv.style.color = "green";
    } else {
        // Si es incorrecta, muestra el resultado correcto en rojo
        resultadoDiv.textContent = "Incorrecto. La respuesta correcta era " + (afirmacion.esVerdadera ? "Verdadero" : "Falso") + ".";
        resultadoDiv.style.color = "red";
    }
}

// Añade un evento de escucha al botón de reiniciar (init) para limpiar el resultado
let init = document.getElementById("init");
let text = document.getElementById("resultado");

// Al hacer clic en el botón de reiniciar, el texto del resultado se limpia
init.addEventListener("click", () => {
    text.textContent = " ";
});