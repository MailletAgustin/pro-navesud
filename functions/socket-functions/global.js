const fs = require('fs');
const path = require('path');

globalFileDir = 'global.json'; 

function modificarPrecioDelCurso(socket, data) {
    console.log('Modificando precio del curso...')
    let content = JSON.parse(fs.readFileSync(globalFileDir, 'utf8'));
    content.precioCurso = data;
    socket.emit('precioExamenModificado', (data));
    fs.writeFileSync(globalFileDir, JSON.stringify(content));
    console.log('Nuevo precio: ' + data)
}

function modificarPrecioDelExamen(socket, data) {
    console.log('Modificando precio del examen...')
    let content = JSON.parse(fs.readFileSync(globalFileDir, 'utf8'));
    content.precioExamen = data;
    socket.emit('precioCursoModificado', (data))
    fs.writeFileSync(globalFileDir, JSON.stringify(content));
    console.log('Nuevo precio: ' + data)
}

module.exports = {
    modificarPrecioDelCurso,
    modificarPrecioDelExamen
}