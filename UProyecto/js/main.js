// Escucha el evento 'DOMContentLoaded', que se dispara cuando el DOM ha sido completamente cargado y parseado.
document.addEventListener("DOMContentLoaded", function() {
    // Esta línea se ejecuta cuando el DOM ha sido cargado correctamente.
    // Solo se ejecuta una vez al cargar la página.
    console.log("JavaScript cargado correctamente.");
});

// Función para redirigir a otra página según la opción seleccionada en un <select> con id 'opciones'
function redirigirPagina() {
    // Obtiene el elemento <select> con id 'opciones'
    const select = document.getElementById("opciones");
    // Obtiene el valor de la opción seleccionada en el <select>
    const pagina = select.value;

    // Si hay una opción seleccionada (es decir, el valor no está vacío)
    if (pagina) {
        // Redirige la página a la URL que corresponde al valor seleccionado
        // Esto cambia la ubicación actual a la URL de la opción seleccionada
        window.location.href = pagina;
    }
}
