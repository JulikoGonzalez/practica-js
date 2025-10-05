// --- Ejercicio 4 ---

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

// Función 1: filtrar desarrolladores que saben JavaScript
const desarrolladoresJavascript = datos.filter(
    persona => persona.habilidades.includes('JavaScript')
);

// Función 2: sacar nombres de todos los proyectos
const nombresProyectos = datos.flatMap(persona =>
    persona.proyectos.map(proyecto => proyecto.nombre)
);

console.log("Desarrolladores con JavaScript:");
console.log(desarrolladoresJavascript);

console.log("\nNombres de todos los proyectos:");
console.log(nombresProyectos);

