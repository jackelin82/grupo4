// Función que realiza un análisis de texto para contar diferentes características
function analisisText() {
    // Obtiene el texto ingresado por el usuario en el campo de entrada
    const text = document.getElementById("inputText").value;
    // Obtiene el contenedor donde se mostrarán los resultados del análisis
    const resultDiv = document.getElementById("resultado");

    // Contar caracteres
    // La propiedad `length` devuelve el número total de caracteres en el texto
    const totalCharacters = text.length;

    // Contar vocales (mayúsculas y minúsculas, incluyendo vocales con tilde y diéresis)
    // Se utiliza una expresión regular para hacer coincidir todas las vocales
    const vowels = text.match(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g) || [];
    // Si no hay coincidencias, `match` devuelve null, por lo que se asigna un array vacío
    const vowelCount = vowels.length;

    // Contar signos de puntuación
    // Se utiliza una expresión regular para encontrar caracteres como: .,;!?¿¡"'- 
    const punctuationMarks = text.match(/[.,:;!?¿¡"'-]/g) || [];
    const punctuationCount = punctuationMarks.length;

    // Contar espacios en blanco
    // La expresión regular `\s` busca cualquier tipo de espacio, incluyendo espacios, tabuladores y saltos de línea
    const spaces = text.match(/\s/g) || [];
    const spaceCount = spaces.length;

    // Contar palabras
    // Primero eliminamos los espacios al inicio y al final del texto, luego dividimos el texto por espacios
    // La expresión regular `\s+` divide el texto por uno o más espacios en blanco consecutivos
    // Se filtra para contar solo las palabras que tengan longitud mayor que 0
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Contar dígitos
    // La expresión regular `\d` busca cualquier carácter numérico
    const digits = text.match(/\d/g) || [];
    const digitCount = digits.length;

    // Mostrar los resultados del análisis en el contenedor `resultDiv`
    resultDiv.innerHTML = `
        <p><strong>Total de caracteres:</strong> ${totalCharacters}</p>
        <p><strong>Vocales:</strong> ${vowelCount}</p>
        <p><strong>Signos de puntuación:</strong> ${punctuationCount}</p>
        <p><strong>Espacios:</strong> ${spaceCount}</p>
        <p><strong>Palabras:</strong> ${wordCount}</p>
        <p><strong>Dígitos:</strong> ${digitCount}</p>
    `;
}