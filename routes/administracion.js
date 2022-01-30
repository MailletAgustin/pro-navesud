
const globalVars = require('../global.json');

function mesasExamen(req, res, db) {
    if (req.cookies.sessionToken) {
        db.Usuario.findOne({ sessionToken: req.cookies.sessionToken }, (err, doc) => {
            if (doc) {
                if (doc.email == 'hola@navesud.com.ar') {
                    db.Mesas.find({}, (err, mesas) => {
                        res.render('administracion/home', {
                            global: globalVars,
                            mesas: mesas
                        });
                    })
                } else {
                    res.clearCookie('sessionToken');
                    res.render('landing/iniciar-sesion', {
                        global: globalVars,
                        redirect: 'administracion'
                    });
                }
            } else {
                res.clearCookie('sessionToken');
                res.render('landing/iniciar-sesion', {
                    global: globalVars,
                    redirect: 'administracion'
                });
            }
        });
    } else {
        res.render('landing/iniciar-sesion', {
            global: globalVars,
            redirect: 'administracion'
        });
    }
}

function usuarios(req, res, db) {
    if (req.cookies.sessionToken) {
        db.Usuario.findOne({ sessionToken: req.cookies.sessionToken }, (err, doc) => {
            if (doc) {
                if (doc.email == 'hola@navesud.com.ar') {
                    db.Mesas.find({}, (err, mesas) => {
                        res.render('administracion/usuarios', {
                            global: globalVars,
                            mesas: mesas
                        });
                    })
                } else {
                    res.clearCookie('sessionToken');
                    res.render('landing/iniciar-sesion', {
                        global: globalVars,
                        redirect: 'administracion'
                    });
                }
            } else {
                res.clearCookie('sessionToken');
                res.render('landing/iniciar-sesion', {
                    global: globalVars,
                    redirect: 'administracion'
                });
            }
        });
    } else {
        res.render('landing/iniciar-sesion', {
            global: globalVars,
            redirect: 'administracion'
        });
    }
}

function gestion(req, res, db) {
    if (req.cookies.sessionToken) {
        db.Usuario.findOne({ sessionToken: req.cookies.sessionToken }, (err, doc) => {
            if (doc) {
                if (doc.email == 'hola@navesud.com.ar') {
                    db.Mesas.find({}, (err, mesas) => {
                        res.render('administracion/gestion', {
                            global: globalVars,
                            mesas: mesas
                        });
                    })
                } else {
                    res.clearCookie('sessionToken');
                    res.render('landing/iniciar-sesion', {
                        global: globalVars,
                        redirect: 'administracion'
                    });
                }
            } else {
                res.clearCookie('sessionToken');
                res.render('landing/iniciar-sesion', {
                    global: globalVars,
                    redirect: 'administracion'
                });
            }
        });
    } else {
        res.render('landing/iniciar-sesion', {
            global: globalVars,
            redirect: 'administracion'
        });
    }
}

module.exports = {
    mesasExamen,
    usuarios,
    gestion
}