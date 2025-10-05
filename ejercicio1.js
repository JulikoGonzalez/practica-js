const usuario = {
    nombre: "Julio",
    apellidos: "Varas",
    modulos: [
        { nombre: "Node.js", fechaInicio: "2025-01-10" },
        { nombre: "Git", fechaInicio: "2025-01-15" },
        { nombre: "React", fechaInicio: "2025-02-01" }
    ],
    busquedaActiva: true
};


console.log("Fecha de inicio de React:", usuario.modulos[2].fechaInicio);
