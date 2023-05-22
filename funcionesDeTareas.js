const fs = require('fs');

let archivoTareas = {
    
     archivo: 'tareas.json',
     leerArchivo: function(){
        const tareas = fs.readFileSync('tareas.json','utf-8');
        return JSON.parse(tareas);
       
     }
     
}
module.exports = archivoTareas