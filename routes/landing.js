// Variables
const globalVars = require('../global.json');

// Links
function home (req, res) {
    res.render('landing/home', {global: globalVars});
}

function infoConductorNautico(req, res) {
    res.render('landing/info-conductor-nautico', {global: globalVars});
}

function listadoCursos(req, res) {
    res.render('landing/listado-cursos', {global: globalVars});
}

module.exports = {
    home,
    infoConductorNautico,
    listadoCursos
}