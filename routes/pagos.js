const Console = require("Console");

const emailValidator = require("email-validator");
const mercadopago = require("mercadopago");
const sensible = require("../sensible.json");
const request = require("request");
const usuarios = require('../functions/usuarios');
// Variables
const precioCursoConductorNautico = 7500;

// Configuraciones
mercadopago.configure({
  access_token: sensible.mercadopagoAccesToken,
});

function iniciarPagoConductorNautico(req, res, db) {
  if (
    req.body.nombre &&
    req.body.apellido &&
    req.body.primerCorreo &&
    req.body.segundoCorreo &&
    req.body.primerContra &&
    req.body.segundaContra
  ) {
    nombre = req.body.nombre;
    apellido = req.body.apellido;
    correo = req.body.primerCorreo;
    correoValidacion = req.body.segundoCorreo;
    password = req.body.primerContra;
    passwordValidation = req.body.segundaContra;

    // Verificar que el correo sea correcto y coincidan
    if (emailValidator.validate(correo) && correo === correoValidacion) {
      // Verificar que las contraseñas sean correctas y coincidan
      if (password === passwordValidation) {
        // Crear PreUser (usuario que no está registrado en la base de datos con intención de pago y que aunqueluego no pague queda registrado)
        db.PreUser.create({
          name: nombre,
          lastName: apellido,
          email: correo,
          password: password,
        });

        // Generar datos de pago:
        external_data = JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          correo: correo,
          password: password,
          tipo: "pagado",
          pagoTotal: precioCursoConductorNautico,
        });

        // Generar JSON preferencias
        preference = {
          binary_mode: true,
          external_reference: external_data,
          notification_url:
            "https://navesud.com.ar/pagos/notificaciones/conductor-nautico",
          items: [
            {
              id: "0",
              title: "Curso Conductor Náutico - #WEB002",
              unit_price: precioCursoConductorNautico,
              quantity: 1,
            },
          ],
          back_urls: {
            success: "https://navesud.com.ar/cursos/listado",
          },
          auto_return: "approved",
        };

        // Generar pago e iniciar el pago
        mercadopago.preferences
          .create(preference)
          .then(function (response) {
            global.id = response.body.id;
            res.redirect(response.body.init_point);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        Console.error("[Intento de pago FALLIDO] - Curso conductor náutico - Las contraseñas no coinciden.");
        res.render("error/personalizado", {
          msg: "Intentaste pagar, pero las contraseñas que has introducido no coinciden. ¿Quieres intentarlo nuevamente?",
          return_url: '/info/conductor-nautico'
        });
      }
    } else {
      Console.error("[Intento de pago FALLIDO] - Curso conductor náutico - Los correos no coinciden.");
      res.render("error/personalizado", {
        msg: "Intentaste pagar, pero los correos que has introducido no coinciden. ¿Quieres intentarlo nuevamente?",
        return_url: '/info/conductor-nautico'
    });
    }
  } else {
    Console.error("[Intento de pago FALLIDO] - Curso conductor náutico - Faltaron datos");
    res.render("error/personalizado", {
        msg: "Intentaste pagar, pero olvidaste ingresar algunos datos. ¿Quieres hacerlo nuevamente?",
        return_url: '/info/conductor-nautico'
      });
  }
}

function notificacionPagoConductorNautico(req, res, databaseConnection) {
    res.sendStatus(200);
    if (req.query.topic == "payment") {
        idPago = req.query.id;
        var headers = {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: sensible.mercadopagoAuth,
        };
        var options = {
            url: "https://api.mercadopago.com/v1/payments/" + idPago,
            headers: headers,
        };

        function callback(error, response, body) {
            bodyObj = JSON.parse(body);
            if (!error) {
                console.log(bodyObj);

                if (
                    bodyObj.status == "approved" &&
                    bodyObj.description == "Curso Conductor Náutico - #WEB002"
                ) {
                    external_data = bodyObj.external_reference;
                    usuarios.crear(external_data, databaseConnection) // Aquí se solicita la creación de un USUARIO nuevo con los datos que llegan en EXTERNAL_DATA
                } else {
                    Console.error("[FALLÓ] No se pudo crear el usuario");
                }
            }
        }

        request(options, callback);
    }
}

module.exports = {
  iniciarPagoConductorNautico,
  notificacionPagoConductorNautico
};
