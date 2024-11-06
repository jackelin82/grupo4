// Función principal que se llama para realizar una operación sobre un conjunto de números
function performOperation() {
    // Obtiene el valor ingresado por el usuario en el campo "inputArray"
    const inputArray = document.getElementById("inputArray").value;
    // Obtiene el tipo de operación seleccionada por el usuario (primes, perfects, average)
    const operationType = document.getElementById("operationType").value;
    // Convierte el input en un arreglo de números, separando por comas y convirtiendo a tipo Number
    const numbers = inputArray.split(",").map(Number);
    let result = "";

    // Según el tipo de operación seleccionada, se realiza la operación correspondiente
    switch (operationType) {
        case "primes":
            // Llama a la función que encuentra los números primos en el arreglo
            result = findPrimes(numbers);
            break;
        case "perfects":
            // Llama a la función que encuentra los números perfectos en el arreglo
            result = findPerfects(numbers);
            break;
        case "average":
            // Llama a la función que calcula el promedio de los números
            result = calculateAverage(numbers);
            break;
        default:
            // Si la operación no es válida, muestra un mensaje de error
            result = "Operación no válida";
    }

    // Muestra el resultado de la operación en el elemento con id "sec"
    document.getElementById("sec").innerText = `Resultado: ${result}`;
}

// Función que determina si un número es primo
function isPrime(num) {
    // Los números menores o iguales a 1 no son primos
    if (num <= 1) return false;
    // Recorre los números desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Si el número es divisible por i, no es primo
        if (num % i === 0) return false;
    }
    // Si no es divisible por ningún número, es primo
    return true;
}

// Función que encuentra todos los números primos en un arreglo
function findPrimes(arr) {
    // Filtra el arreglo, dejando solo los números que son primos
    return arr.filter(isPrime).join(", ");
}

// Función que determina si un número es perfecto
function isPerfect(num) {
    // Los números menores o iguales a 1 no son perfectos
    if (num <= 1) return false;
    // Variable que almacenará la suma de los divisores del número
    let sum = 0;
    // Recorre los números desde 1 hasta la mitad del número
    for (let i = 1; i <= num / 2; i++) {
        // Si i es un divisor del número, lo agrega a la suma
        if (num % i === 0) sum += i;
    }
    // Si la suma de los divisores es igual al número, es perfecto
    return sum === num;
}

// Función que encuentra todos los números perfectos en un arreglo
function findPerfects(arr) {
    // Filtra el arreglo, dejando solo los números que son perfectos
    return arr.filter(isPerfect).join(", ");
}

// Función que calcula el promedio de los números en un arreglo
function calculateAverage(arr) {
    // Calcula la suma de todos los números en el arreglo usando reduce
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    // Devuelve el promedio, redondeado a dos decimales
    return (sum / arr.length).toFixed(2);
}
