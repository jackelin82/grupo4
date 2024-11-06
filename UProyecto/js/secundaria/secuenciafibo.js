// Función principal para mostrar la secuencia de Fibonacci hasta un número máximo ingresado por el usuario
function MostrarFibonacci() {
    // Obtiene el valor ingresado en el campo de texto con id 'inputNumber' y lo convierte a número entero
    const maxNumber = parseInt(document.getElementById("inputNumber").value);
    // Variable para almacenar el resultado a mostrar
    let result = "";

    // Verifica si el número ingresado no es válido o es menor que 1
    if (isNaN(maxNumber) || maxNumber < 1) {
        // Si el número no es válido, muestra un mensaje de error
        result = "Por favor, ingresa un número válido mayor que 0.";
    } else {
        // Si el número es válido, genera la secuencia de Fibonacci hasta el número máximo
        result = calculateFibonacci(maxNumber).join(", ");
    }

    // Muestra la secuencia de Fibonacci en el elemento con id 'sec'
    document.getElementById("sec").innerText = `Secuencia de Fibonacci: ${result}`;
}

// Función que genera la secuencia de Fibonacci hasta el número máximo especificado
function calculateFibonacci(maxNumber) {
    // Comienza la secuencia de Fibonacci con los dos primeros números [1, 1]
    const fibonacci = [1, 1];
    
    // Mientras el siguiente número en la secuencia no exceda el valor máximo
    while (true) {
        // Calcula el siguiente número de la secuencia como la suma de los dos últimos números
        const nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        // Si el siguiente número excede el número máximo, termina el ciclo
        if (nextNumber > maxNumber) break;
        // Agrega el siguiente número a la secuencia
        fibonacci.push(nextNumber);
    }

    // Devuelve la secuencia generada
    return fibonacci;
}
