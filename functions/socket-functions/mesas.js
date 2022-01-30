function nueva(socket, data, db) {
    db.Mesas.create({
        fecha: data.fecha,
        registrados: [],
        maxRegistrados: data.maxRegistros,
        estado: 'registrando',
        horaMesa: data.horaMesa
    });
    socket.emit('mesa-registrada');
}

function cerrar(socket, idMesa, db) {
    db.Mesas.findOne({ _id: idMesa }, (err, doc) => {
        if (doc) {
            doc.estado = 'finalizada';
            doc.save();
        }
        socket.emit('registro-cerrado')
    });
}

function getUsuariosRegistrados(socket, mesaId, db) {
        db.Mesas.findOne({_id: mesaId}, (err, mesa) => {
            if (err) throw err;
            mesa.registrados.forEach(userId => {
                db.Usuario.findOne({_id: userId}, (err, doc) => {
                    if (doc) {
                        data = {
                            mesa,
                            user: doc
                        }
                        socket.emit('listarUsuarioRegistrado', (data));
                    }
                    
                });
            });
            if (mesa.registrados.length == 0) {
                data = {
                    mesa,
                    user: ''
                }
                socket.emit('listarUsuarioRegistrado', (data));
            }
        });
}

function desregistrar(socket, data, db) {
    db.Usuario.findOne({_id: data.id}, (err, doc) => {
        if (doc) {
            mesaId = doc.mesaExamen;
            doc.mesaExamen = undefined;
            doc.save();
            db.Mesas.findOne({_id: mesaId}, (e, d) => {
                if (d) {
                    for (let i = 0; i < d.registrados.length; i++) {
                        let alumnoId = d.registrados[i];
                        if (alumnoId == doc._id) {
                            console.log(i);
                            aux = d.registrados;
                            aux.splice(i, 1);
                            d.registrados = aux;
                            console.log(d.registrados);
                            d.save();
                            socket.emit('actualizarMesa', {id: 'm' + mesaId});
                        }
                    }
                }
            });
        }
    });    
}

module.exports = {
    nueva,
    cerrar,
    getUsuariosRegistrados,
    desregistrar
}