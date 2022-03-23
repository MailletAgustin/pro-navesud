console.clear();
let APPMODE = 'DEV';

let https, io;
const Console = require("Console");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const bodyParser = require("body-parser");
const db = require('./database.js');
const fs = require('fs');

const cookieParser = require("cookie-parser"); 
const PORT = 443;

Console.success('Iniciando servidor...')

// Configuracion de SSL
if (APPMODE == 'PROD') {
  https = require("https").createServer({
      key: fs.readFileSync('/etc/letsencrypt/live/navesud.com.ar/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/navesud.com.ar/cert.pem'),
      ca: fs.readFileSync('/etc/letsencrypt/live/navesud.com.ar/chain.pem'),
      rejectUnauthorized: false,
  },
      app
  );
}
if (APPMODE == 'PROD') {
  io = require("socket.io")(https)
} else {
  io = require("socket.io")(http)
}

if (APPMODE == 'PROD') {
  app.use(function(request, response, next) {
  
      if (!request.secure) {
         return response.redirect("https://" + request.headers.host + request.url);
      }
  
      next();
  })
}

// Configuraciones
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true,}));
app.use(bodyParser.json());
app.use(cookieParser());

// Variables globales
const port = 80;

// Rutas
const landing = require("./routes/landing.js");
const pagos = require("./routes/pagos.js");
const error = require("./routes/error.js");
const administracion = require("./routes/administracion.js");
const cursoConductorNautico = require('./routes/curso-conductor-nautico.js');
const usuarios = require('./functions/usuarios');
const socketControl = require('./functions/socketControl');

// Sockets [Manejo de datos en tiempo real]
io.on('connection', (socket) => { socketControl.create(socket, db)});

// Renderizado de página pública
app.get("/", (req, res) => landing.home(req, res)); // Home
app.get("/info/conductor-nautico", (req, res) => landing.infoConductorNautico(req, res)); // Información y página para iniciar pago
app.get("/cursos/listado", (req, res) => landing.listadoCursos(req, res)); // Listado de cursos público

// Pagos
app.post('/pagos/conductor-nautico', (req, res) => pagos.iniciarPagoConductorNautico(req, res)); //Se inicia el proceso de pago del CURSO CONDUCTOR NAUTICO, se envían datos desde /info/conductor-nautico
app.post('/pagos/notificaciones/conductor-nautico', (req, res) => pagos.notificacionPagoConductorNautico(req, res, db)); //Se notifica un cambio en el proceso de pago del CURSO CONDUCTOR NAUTICO (Se pagó, se rechazó, etc). Se envía la BASE DE DATOS para CREAR EL USUARIO si es necesario.

// Curso conductor náutico
app.get('/cursos/conductor-nautico', (req, res) => cursoConductorNautico.home(req, res, db));
app.post('/cursos/conductor-nautico/llenar-informacion', (req, res) => cursoConductorNautico.completarInformacion(req, res, db));
app.get('/cursos/conductor-nautico/paso-1', (req, res, next) => {cursoConductorNautico.paso1(req, res, db)});
app.get('/cursos/conductor-nautico/paso-2', (req, res, next) => {cursoConductorNautico.paso2(req, res, db)});
app.get('/cursos/conductor-nautico/paso-3', (req, res, next) => {cursoConductorNautico.paso3(req, res, db)});
app.get('/cursos/conductor-nautico/paso-final', (req, res, next) => {cursoConductorNautico.pasoFinal(req, res, db)});
app.get('/cursos/conductor-nautico/calendario', (req, res, next) => {cursoConductorNautico.calendario(req, res, db)});
app.post('/cursos/conductor-nautico/solicitar-extension', (req, res, next) => {cursoConductorNautico.solicitarExtension(req, res, db)});
app.post('/cursos/conductor-nautico/confirmar-examen', (req, res, next) => {cursoConductorNautico.confirmarExamen(req, res, db)});
app.post('/cursos/conductor-nautico/agregar-dias', (req, res, next) => {cursoConductorNautico.agregarDias(req, res, db)});

// Administracion
app.get('/administracion', (req, res) => {administracion.mesasExamen(req, res, db)});
app.get('/administracion/usuarios', (req, res) => {administracion.usuarios(req, res, db)});
app.get('/administracion/gestion', (req, res) => {administracion.gestion(req, res, db)});

// Iniciar sesión
app.post('/iniciar-sesion', (req, res) => usuarios.iniciarSesion(req, res, db));

// ERROR 404
app.get('*', (req, res) => error.notFound(req, res));

// Abrir puerto HTTPS 443
if (APPMODE == 'PROD') {
  https.listen(PORT, function () {
      console.log("My HTTPS server listening on port " + PORT + "...");
  });
}

http.listen(port, () => {
  Console.log("[Creado] Servidor escuchando en puerto: " + port);
});

if (APPMODE == 'PROD') {
  // Tareas programadas
  const CronJob = require('cron').CronJob;
  const { type } = require("os");
  // Se ejecuta cada medianoche
  var medianoche = new CronJob('0 0 0 * * *', function() {
    db.Usuario.find( (err, docs) => {
      docs.forEach((doc) => {
        // Desconectar a todos los usuarios
        doc.sessionToken = '';
        
        // Restar un día a los días restantes
        Console.warn('Restando días a todos los usuarios');
        if (doc.cursoConductorNautico && doc.cursoConductorNautico.diasRestantes && doc.cursoConductorNautico.diasRestantes != 'expiro') {
          let tempObj;
          // Revisar si ya no le quedan dias restantes
          // ##############
          if (doc.cursoConductorNautico.diasRestantes - 1 <= 0) {
            tempObj = {
              diasRestantes: 'expiro'
            }
          } else {
            tempObj = {
              diasRestantes: doc.cursoConductorNautico.diasRestantes -1
            }
          }
          doc.cursoConductorNautico = {...doc.cursoConductorNautico, ...tempObj}
        }

        Console.success('Dias restados a todos los usuarios');
        
        // Revisar si lleva mas de 7 días inactivo
        // ##############

        doc.save();
      });
    });
  });

  medianoche.start();
}