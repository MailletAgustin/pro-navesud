
const moment = require('moment');
const correos = require('./correos')
const Console = require('Console');

function crear(socket, data, db) {
    external_data = JSON.parse(data);
    console.log(external_data)
    console.log(typeof external_data);
    // Crear el USUARIO
    nuevoUsuario = db.Usuario.create({
        name: external_data.nombre,
        lastName: external_data.apellido,
        email: external_data.correo,
        password: external_data.password,
        sessionToken: '',
        cursoPago: ['conductor-nautico'],
        tipo: external_data.tipo,
        pagoTotal: external_data.pagoTotal,
        fechaRegistro: new moment()
    });

    correos.registroExitoso(external_data.correo, external_data.nombre, external_data.correo, external_data.password)
}


function iniciarSesion(req, res, db) {
    correo = req.body.correo;
    clave = req.body.clave;
    redirect = req.body.redireccion;
    Console.warn(`#4 [${moment()}] Se intenta iniciar sesión con [${correo}], [${clave}]`)
    db.Usuario.findOne({ email: correo }, (err, doc) => {
        if (doc) {
            if (doc.password == clave && doc.email == correo) {
                sessionToken = CrearSesion()
                doc.sessionToken = sessionToken;
                doc.lastLogin = moment();
                doc.save();
                Console.success(`#4.1 [${moment()}] Inicio de sesión exitoso con [${correo}], [${clave}]`)
                // Agregar cookie y redirigir a la variable redirect;
                res.cookie('sessionToken', sessionToken, { expire: new Date() + 9999 });
                res.redirect('/' + redirect);
            } else {
                Console.warn(`#4.2 [${moment()}] Falló al iniciar sesión con [${correo}], [${clave}], la clave no es correcta.`)
                res.redirect('/' + redirect);
            }
        } else {
            Console.warn(`#4.2 [${moment()}] Falló al iniciar sesión con [${correo}], [${clave}], el usuario no existe`)
            res.redirect('/' + redirect);
        }
    });
}

// Private functions
function CrearSesion() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}


module.exports = {
    crear,
    iniciarSesion
}