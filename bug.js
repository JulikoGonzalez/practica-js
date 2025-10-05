// bug.js - solución al ejercicio 2

const calcularPromedio = (numeros) => {
    // Protección: si el array está vacío devolvemos 0 (o podríamos devolver null)
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return 0;
    }

    let sumaTotal = 0;

    // Recorrer desde i = 0 hasta i < numeros.length (no <=)
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log("Lista:", listaNumeros);
console.log("Promedio:", promedioNumeros);
