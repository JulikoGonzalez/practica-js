// --- Ejercicio 3.1 ---
const yourFunction = (arr) => {
    // Tomamos todos menos el último
    const partes = arr.slice(0, -1).join("/"); // une con /
    const extension = arr[arr.length - 1]; // último elemento
    return `${partes}.${extension}`; // lo juntamos con .
};

// Pruebas:
const input1 = ['Downloads', 'Videos', 'capture', 'mp4'];
const input2 = ['CodinGame', 'python', 'py'];
const input3 = ['programming', 'languages', 'easy', 'beginner', 'useful', 'pythonstuff', 'py'];

console.log(yourFunction(input1)); // 'Downloads/Videos/capture.mp4'
console.log(yourFunction(input2)); // 'CodinGame/python.py'
console.log(yourFunction(input3)); // 'programming/languages/easy/beginner/useful/pythonstuff.py'


// --- Ejercicio 3.2 ---
const yourFunction2 = (num) => {
    return num.toString().split("").join("-");
};

// Pruebas:
console.log(yourFunction2(10));     // '1-0'
console.log(yourFunction2(1));      // '1'
console.log(yourFunction2(11234));  // '1-1-2-3-4'


// --- Ejercicio 3.3 ---
const yourFunction3 = (texto) => {
    const longitud = texto.length; // cuenta las letras
    const invertido = texto.split("").reverse().join(""); // lo invierte
    return `${longitud} ${invertido}`; // une los dos resultados
};

// Pruebas:
console.log(yourFunction3("string"));   // '6 gnirts'
console.log(yourFunction3("variable")); // '8 elbairav'
console.log(yourFunction3("pointer"));  // '7 retniop'
