const Console = require("Console");
const globalVars = require("../global.json");

function home(req, res, db) {
  if (req.cookies.sessionToken) {
    db.Usuario.findOne(
      { sessionToken: req.cookies.sessionToken },
      (err, doc) => {
        if (doc) {
          if (doc.active) {
            res.render("curso-cn/introduccion", {
              global: globalVars,
              userInfo: doc,
            });
          } else {
            res.render("curso-cn/llenar-informacion", {
              global: globalVars,
              userInfo: doc,
            });
          }
        } else {
          res.clearCookie("sessionToken");
          res.redirect("/cursos/listado");
        }
      }
    );
  } else {
    res.render("landing/iniciar-sesion", {
      global: globalVars,
      redirect: "cursos/conductor-nautico",
    });
  }
}

function paso1(req, res, db) {
  if (req.cookies.sessionToken) {
    db.Usuario.findOne(
      { sessionToken: req.cookies.sessionToken },
      (err, doc) => {
        if (doc) {
          if (doc.active) {
            res.render("curso-cn/paso-1", {
              global: globalVars,
              userInfo: doc,
            });
          } else {
            res.render("llenar-informacion-curso-conductor-nautico", {
              global: globalVars,
              userInfo: doc,
            });
          }
        } else {
          res.clearCookie("sessionToken");
          res.redirect("/cursos/listado");
        }
      }
    );
  } else {
    res.render("landing/iniciar-sesion", {
      global: globalVars,
      redirect: "cursos/conductor-nautico/paso-1",
    });
  }
}

function paso2(req, res, db) {
  if (req.cookies.sessionToken) {
    db.Usuario.findOne(
      { sessionToken: req.cookies.sessionToken },
      (err, doc) => {
        if (doc) {
          if (
            doc.moreInfo &&
            (doc.moreInfo.telefono == undefined || doc.moreInfo.telefono == "")
          ) {
            res.render("curso-cn/info-celular-ciudad", { userInfo: doc });
          } else {
            if (doc.active) {
              res.render("curso-cn/paso-2", {
                global: globalVars,
                userInfo: doc,
              });
            } else {
              res.render("llenar-informacion-curso-conductor-nautico", {
                global: globalVars,
                userInfo: doc,
              });
            }
          }
        } else {
          res.clearCookie("sessionToken");
          res.redirect("/cursos/listado");
        }
      }
    );
  } else {
    res.render("landing/iniciar-sesion", {
      global: globalVars,
      redirect: "cursos/conductor-nautico/paso-2",
    });
  }
}

function paso3(req, res, db) {
  if (req.cookies.sessionToken) {
    db.Usuario.findOne(
      { sessionToken: req.cookies.sessionToken },
      (err, doc) => {
        if (doc) {
          if (doc.active) {
            res.render("curso-cn/paso-3", {
              global: globalVars,
              userInfo: doc,
            });
          } else {
            res.render("llenar-informacion-curso-conductor-nautico", {
              global: globalVars,
              userInfo: doc,
            });
          }
        } else {
          res.clearCookie("sessionToken");
          res.redirect("/cursos/listado");
        }
      }
    );
  } else {
    res.render("landing/iniciar-sesion", {
      global: globalVars,
      redirect: "cursos/conductor-nautico/paso-3",
    });
  }
}

function pasoFinal(req, res, db) {
  if (req.cookies.sessionToken) {
    db.Usuario.findOne(
      { sessionToken: req.cookies.sessionToken },
      (err, doc) => {
        if (doc) {
          if (doc.active) {
            res.render("curso-cn/paso-final", {
              global: globalVars,
              userInfo: doc,
            });
          } else {
            res.render("llenar-informacion-curso-conductor-nautico", {
              global: globalVars,
              userInfo: doc,
            });
          }
        } else {
          res.clearCookie("sessionToken");
          res.redirect("/cursos/listado");
        }
      }
    );
  } else {
    res.render("landing/iniciar-sesion", {
      global: globalVars,
      redirect: "cursos/conductor-nautico/paso-final",
    });
  }
}

function completarInformacion(req, res, db) {
  Console.warn("Completando información del usuario ...");
  db.Usuario.findOne({ sessionToken: req.body.sessionToken }, (err, doc) => {
    if (doc) {
      doc.name = req.body.nombre;
      doc.lastName = req.body.apellido;
      doc.moreInfo = {
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        dni: req.body.dni,
        cuitcuil: req.body.cuitcuil,
        fechanacimiento: req.body.fechanacimiento,
        telefono: req.body.celular,
        ciudad: req.body.ciudad,
        experiencia: req.body.experiencia,
        porque: req.body.porque,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        embarcacionesA: req.body.embarcacionesA,
        embarcacionesB: req.body.embarcacionesB,
        embarcacionesC: req.body.embarcacionesC,
        embarcacionesD: req.body.embarcacionesD,
        rioA: req.body.rioA,
        rioB: req.body.rioB,
        rioC: req.body.rioC,
        rioD: req.body.rioD,
        rioE: req.body.rioE,
        rioF: req.body.rioF,
        rioG: req.body.rioG,
      };
      doc.cursoConductorNautico = {
        diasRestantes: 40,
        diasExtension: 15,
        introduccion: {
          video1: "",
        },
        paso1: {
          video1: "",
          video2: "",
          video3: "",
          video4: "",
          autoevaluacion: "noRealizada",
        },
        paso2: {
          video1: "",
          video2: "",
          video3: "",
          video4: "",
          autoevaluacion: "noRealizada",
        },
        paso3: {
          video1: "",
          video2: "",
          video3: "",
          video4: "",
          autoevaluacion: "noRealizada",
        },
        final: {
          autoevaluacion1: "noRealizada",
          autoevaluacion2: "noRealizada",
        },
      };
      doc.active = true;
      doc.save();
      Console.success(
        `[Completado] ${doc.moreInfo.apellido} ${doc.moreInfo.nombre} llenó sus datos.`
      );
      res.redirect("/cursos/conductor-nautico");
    } else {
      Console.err("[ERROR] No se encontró el usuario");
      res.redirect("/cursos/listado");
    }
  });
}

function calendario(req, res, db) {
  if (req.cookies.sessionToken) {
      db.Usuario.findOne({ sessionToken: req.cookies.sessionToken }, (err, doc) => {
          if (doc) {
              if (doc.active) {
                  db.Mesas.find({}, (err, mesas) => {
                      res.render('curso-cn/calendario', {
                          global: globalVars,
                          userInfo: doc,
                          mesas: mesas
                      });
                  });
              } else {
                  res.render('llenar-informacion-curso-conductor-nautico', {
                      global: globalVars,
                      userInfo: doc
                  });
              }
          } else {
              res.clearCookie('sessionToken');
              res.redirect('/cursos/listado')
          }
      });
  } else {
      res.render('landing/iniciar-sesion', {
          global: globalVars,
          redirect: 'cursos/conductor-nautico/calendario'
      });
  }
}

function solicitarExtension(req, res, db) {
  console.log(req.body.idCode);
  db.Usuario.findOne({_id: req.body.idCode}, (err, doc) => {
    if (err) {
      Console.warn(err)
    } else {
      Console.success('Agregando días a : ' + doc.email);
      auxTemp = {
        renovado: true,
        diasRestantes: 15
      }

      doc.cursoConductorNautico = {...doc.cursoConductorNautico, ...auxTemp}
      doc.save();
    }
  });
  res.redirect('/cursos/conductor-nautico');
}

module.exports = {
  home,
  paso1,
  paso2,
  paso3,
  pasoFinal,
  calendario,
  completarInformacion,
  solicitarExtension
};
