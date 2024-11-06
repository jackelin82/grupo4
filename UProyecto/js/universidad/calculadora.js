// Obtiene el elemento con id "display" donde se muestra el valor de la calculadora
let display = document.getElementById("display");

// Función para agregar un número al valor actual en el display
function appendNumber(number) {
    // Añade el número al valor actual del display
    display.value += number;
}

// Función para agregar un operador al valor actual en el display
function appendOperator(operator) {
    // Añade el operador al valor actual del display
    display.value += operator;
}

// Función para borrar todo el valor en el display (limpiar la pantalla)
function clearDisplay() {
    // Resetea el valor del display a una cadena vacía
    display.value = '';
}

// Función para calcular la expresión matemática en el display
function calculate() {
    try {
        // Evalúa la expresión matemática en el display.
        // Primero, reemplaza los símbolos '×' y '÷' por '*' y '/' respectivamente, para que eval() los pueda interpretar correctamente.
        // El resultado de la evaluación se asigna de nuevo al display.
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        // Si ocurre un error en la evaluación (por ejemplo, una expresión inválida), muestra "Error" en el display
        display.value = "Error";
    }
}
