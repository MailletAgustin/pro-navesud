const Console = require('Console');
const usuarios = require('./socket-functions/usuarios');
const correos = require('./correos');
const mesas = require('./socket-functions/mesas');
const moment = require('moment');

function create(socket, db) {
    Console.log('[Creada] Conexión con usuario');
    socket.on('setDatos', (data) => usuarios.setDatos(socket, data, db)); //Actualizar todos los datos del usuario y enviarlos a la base de datos
    socket.on('inscripcion', (data) => usuarios.inscribirUsuarioAMesa(socket, data, db)); //Inscribir usuario a mesa de examen
    socket.on('enviarCorreo', (data) => correos.controlCorreos(data, db)); // Controlador de correos, se le pasa el número de correo + session token para buscar el usuario
    socket.on('nuevaMesa', (data) => { mesas.nueva(socket, data, db) });
    socket.on('cerrar-registro', (data) => { mesas.cerrar(socket, data, db) });
    socket.on('getUsuariosRegistrados', (data) => { mesas.getUsuariosRegistrados(socket, data, db) });
    socket.on('desregistrar', (data) => { mesas.desregistrar(socket, data, db) });
    socket.on('nuevoUsuarioDesdePanelAdministrador', (data) => {usuarios.nuevoUsuarioDesdePanelAdministrador(socket, data, db)});
    socket.on('verUsuariosConFiltro', (data) => {usuarios.verUsuariosConFiltro(socket, data, db)});
    socket.on('findMoreData', (data) => {usuarios.findMoreData(socket, data, db)});
    socket.on('generar-reporte', async (data) => {
        if (data.hasta && data.desde) {
            all = await db.Usuario.find();
            let filtrados = [];
            all.forEach(user => {
                userDateRegistration = moment(user.fechaRegistro);
                hasta = moment(data.hasta)
                desde = moment(data.desde)
                if (userDateRegistration.isBetween(desde, hasta)) {
                    filtrados.push(user)
                }
            });
            socket.emit('nuevo-reporte', {filtrados});
        } else {
            console.log('Se intento generar un reporte sin fechas');
        }
    });
}


module.exports = {
    create
}