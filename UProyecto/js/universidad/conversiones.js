// Función que realiza conversiones entre diferentes sistemas numéricos (binario, decimal, hexadecimal)
function convertNumero() {
    // Obtiene el valor ingresado en el campo de texto para el número de entrada
    const inputNumber = document.getElementById("inputNumber").value;
    // Obtiene el tipo de conversión seleccionada por el usuario (binario a decimal, decimal a binario, etc.)
    const conversionType = document.getElementById("conversionType").value;
    // Variable donde se almacenará el resultado de la conversión
    let result = "";

    // Usamos un bloque try-catch para manejar errores en la conversión (por ejemplo, entrada no válida)
    try {
        // Dependiendo del tipo de conversión, se realiza la conversión correspondiente
        switch (conversionType) {
            case "binToDec":
                // Convierte de binario a decimal
                result = parseInt(inputNumber, 2).toString(10);
                break;
            case "binToHex":
                // Convierte de binario a hexadecimal
                result = parseInt(inputNumber, 2).toString(16).toUpperCase();
                break;
            case "decToBin":
                // Convierte de decimal a binario
                result = parseInt(inputNumber, 10).toString(2);
                break;
            case "decToHex":
                // Convierte de decimal a hexadecimal
                result = parseInt(inputNumber, 10).toString(16).toUpperCase();
                break;
            case "hexToBin":
                // Convierte de hexadecimal a binario
                result = parseInt(inputNumber, 16).toString(2);
                break;
            case "hexToDec":
                // Convierte de hexadecimal a decimal
                result = parseInt(inputNumber, 16).toString(10);
                break;
            default:
                // Si el tipo de conversión no es válido, muestra un mensaje de error
                result = "Conversión no válida";
        }
    } catch (error) {
        // Si hay un error (por ejemplo, si el input no es un número válido), muestra un mensaje de error
        result = "Entrada no válida";
    }

    // Muestra el resultado de la conversión en un elemento HTML con id 'sec'
    document.getElementById("sec").innerText = `Resultado: ${result}`;
}