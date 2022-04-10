const Console = require("Console");
Console.success('Iniciando conexión a la base de datos...');

const sensible = require("./sensible.json");
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const uri = sensible.databaseConnection;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err));
mongoose.connection.once('open', () => {
    Console.log('[Creada] Conexión con la base de datos');
});

var UsuarioSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    sessionToken: String,
    cursoPago: [],
    active: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },
    fechaRegistro: { type: String, default: new Date() },
    moreInfo: {},
    cursoConductorNautico: {},
    tipo: String,
    mesaExamen: String,
    renovacion: {type: String},
    lastLogin: String,
    pagoTotal: String,
    lastLogin: String
});

var PreUserSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    fechaIntentoPago: { type: String, default: new Date() },
});

var MesasSchema = mongoose.Schema({
    fecha: String,
    registrados: [],
    maxRegistrados: Number,
    horaMesa: String,
    estado: String // 'registrando', 'completa', 'registro finalizado'
})

exports.Mesas = mongoose.model("Mesas", MesasSchema);
exports.Usuario = mongoose.model("Usuario", UsuarioSchema);
exports.PreUser = mongoose.model("PreUser", PreUserSchema);