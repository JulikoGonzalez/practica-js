// bugAsync.js - Solución al ejercicio 5 (Promise + async/await)

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe' });
            } else {
                reject(new Error('Usuario no encontrado'));
            }
        }, 2000);
    });
}

(async () => {
    try {
        const usuario = await obtenerUsuario(1); // espera la promesa
        console.log('Usuario (async/await):', usuario);
    } catch (err) {
        console.error('Error (async/await):', err.message);
    }
})();
