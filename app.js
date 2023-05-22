console.clear();

const archivo = require('./funcionesDeTareas');

let tareas = archivo.leerArchivo()

const argv = require('process').argv;

const comando = argv[2];

switch (comando) {
    
    case 'listar':
        console.log("---------------> Listado de tareas <---------------");
        tareas.forEach((tarea,i) => {
            console.log(`${i + 1} - ${tarea.titulo} ----> ${tarea.estado}`);
        });
        break;

    case undefined:
        console.log("ATENCIÓN!! - Tienes que pasar una acción. Las acciones disponibles son : listar.");
        break;

         default:
        console.log("No entiendo qué quieres hacer.");
        break;
        
}
console.log("---------------------------------------------------");