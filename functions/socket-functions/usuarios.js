const Console = require('Console');
const usuarios = require('../usuarios');
const moment = require('moment');

function setDatos(socket, data, db) {
    Console.warn('Actualizando datos del curso de un usuario...');
    db.Usuario.findOne({sessionToken: data.sessionToken}, (err, doc) => {
        if (doc) {
            Console.warn('[Listo] Datos actualizados... - ' + doc.name + ' ' + doc.lastName);
            doc.cursoConductorNautico = data.datos;
            doc.save();
        } else {
           // El usuario no existe, desconectar
           Console.error('[Error] Se venció el Session Token | ');
           Console.warn('[Desconectando...] | ');
           socket.emit('desconectarUsuario');
           Console.error('[Desconectado] | '); 
        }
    });
}

function inscribirUsuarioAMesa(socket, data, db) {
    db.Usuario.findOne({ _id: data.userId }, (err, doc) => {
        if (doc) {
            db.Mesas.findOne({ _id: data.mesaId }, (err, mesa) => {
                if (mesa) {
                    if (mesa.registrados.length >= mesa.maxRegistrados -1) {
                        mesa.estado = "completa";
                        mesa.registrados.push(data.userId);
                        doc.mesaExamen = data.mesaId;
                        doc.save();
                    } else {
                        mesa.registrados.push(data.userId);
                        doc.mesaExamen = data.mesaId;
                        doc.save();
                    }
                    mesa.save();
                }
            });
        }
    });
    socket.emit('registro-terminado');
}

function nuevoUsuarioDesdePanelAdministrador(socket, data, db) {
    data = JSON.stringify(data);
    console.log(data);
    usuarios.crear(socket, data, db);
}

function verUsuariosConFiltro(socket, data, db) {
    console.log(data);
    // data.avance = none | sinDatos | introduccion | paso1 | paso2 | paso3 | pasoFinal | cursoAprobado
    
    // Mostrar todos los usuarios
    if (data.avance == 'none') {
        db.Usuario.find((err, docs) => {
            arrayDocs = ordenarUsuarios(docs);
            socket.emit('mostrar-usuarios', (arrayDocs));
        })
    }

    // Mostrar los usuarios que aún no han llenado la información
    if (data.avance == 'sinDatos') {
        db.Usuario.find((err, docs) => {
            let arrayDocs = [];
            docs.forEach(doc => {
                if (doc.cursoConductorNautico == undefined) {
                    arrayDocs.push(doc);
                }
            });
            arrayDocs = ordenarUsuarios(arrayDocs);
            socket.emit('mostrar-usuarios', (arrayDocs));
        });
    }

    // Mostrar los usuarios que estan en la introducción
    if (data.avance == 'introduccion') {
        db.Usuario.find((err, docs) => {
            let arrayDocs = [];
            docs.forEach(doc => {
                if (doc.cursoConductorNautico && doc.cursoConductorNautico.estado == 'introduccion') {
                    arrayDocs.push(doc);
                }
            });
            arrayDocs = ordenarUsuarios(arrayDocs);
            socket.emit('mostrar-usuarios', (arrayDocs));
        });
    }

    // Mostrar los usuarios que estan en el paso 1
    if (data.avance == 'paso1') {
        db.Usuario.find((err, docs) => {
            let arrayDocs = [];
            docs.forEach(doc => {
                if (doc.cursoConductorNautico && doc.cursoConductorNautico.estado == 'paso1') {
                    arrayDocs.push(doc);
                }
            });
            socket.emit('mostrar-usuarios', (arrayDocs));
        });
    }

    // Mostrar los usuarios que estan en el paso 2
    if (data.avance == 'paso2') {
        db.Usuario.find((err, docs) => {
            let arrayDocs = [];
            docs.forEach(doc => {
                if (doc.cursoConductorNautico && doc.cursoConductorNautico.estado == 'paso2') {
                    arrayDocs.push(doc);
                }
            });
            arrayDocs = ordenarUsuarios(arrayDocs);
            socket.emit('mostrar-usuarios', (arrayDocs));
        });
    }
    
    // Mostrar los usuarios que estan en el paso 3
    if (data.avance == 'paso3') {
        db.Usuario.find((err, docs) => {
            let arrayDocs = [];
            docs.forEach(doc => {
                if (doc.cursoConductorNautico && doc.cursoConductorNautico.estado == 'paso3') {
                    arrayDocs.push(doc);
                }
            });
            arrayDocs = ordenarUsuarios(arrayDocs);
            socket.emit('mostrar-usuarios', (arrayDocs));
        });
    }
    
    // Mostrar los usuarios que estan en el paso final
    if (data.avance == 'pasoFinal') {
        db.Usuario.find((err, docs) => {
            let arrayDocs = [];
            docs.forEach(doc => {
                if (doc.cursoConductorNautico && doc.cursoConductorNautico.estado == 'paso-final') {
                    arrayDocs.push(doc);
                }
            });
            arrayDocs = ordenarUsuarios(arrayDocs);
            socket.emit('mostrar-usuarios', (arrayDocs));
        });
    }
    
    // Mostrar los usuarios que aprobaron el curso
    if (data.avance == 'cursoAprobado') {
        db.Usuario.find((err, docs) => {
            let arrayDocs = [];
            docs.forEach(doc => {
                if (doc.cursoConductorNautico && doc.cursoConductorNautico.estado == 'aprobado') {
                    arrayDocs.push(doc);
                }
            });
            arrayDocs = ordenarUsuarios(arrayDocs);
            socket.emit('mostrar-usuarios', (arrayDocs));
        });
    }
}

function buscarIntencionesDePago(socket, db) {
    console.log('Buscando intenciones...');
    let preUsers = [];
    let users = [];

    db.Usuario.find({}, (err, docs) => {
        docs.forEach(doc => {
            users.push(doc.email);
        });
        console.log(users);
        db.PreUser.find({}, (err, pres) => {
            pres.forEach(pre => {
                // Filtrar y pushear solo los PREUSUARIOS que no se registraron
                if (users.includes(pre.email)) {return false}
                preUsers.push(pre)
            });
            socket.emit('listadoDePreUsers', (preUsers));
        });
    });
    
    
}

// Private functions
function ordenarUsuarios(userList) {
    usuariosOrdenados = userList.sort((a, b) => moment(b.fechaRegistro).unix() - moment(a.fechaRegistro).unix());
    return usuariosOrdenados;
}

function findMoreData(socket, data, db) {
    db.Usuario.findOne({_id: data}, (err, doc) => {
        if (err) throw err
        socket.emit('showMoreData', (doc));
    });
}


module.exports = {
    setDatos,
    inscribirUsuarioAMesa,
    nuevoUsuarioDesdePanelAdministrador,
    verUsuariosConFiltro,
    findMoreData,
    buscarIntencionesDePago
}