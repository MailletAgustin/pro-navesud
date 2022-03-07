const Console = require("Console");
const globalVars = require("../global.json");
const correos = require("../functions/correos");

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
      doc.estado = "introduccion";
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
          autoevaluacion: "noRealizada"
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

function confirmarExamen(req, res, db) {
  data = JSON.parse(req.body.data);
  if (data.autoevaluacion == 'introduccion') {
    db.Usuario.findOne({_id: data.userId}, (err, doc) => {
      if (doc) {
        // Actualizar la nota siempre y cuando sea mayor a que la anterior
          if (data.nota > doc.cursoConductorNautico.introduccion.autoevaluacion || doc.cursoConductorNautico.introduccion.autoevaluacion == 'noRealizada') {
            aux = doc.cursoConductorNautico;
            if (!doc.cursoConductorNautico.introduccion.aprobado && data.nota >= globalVars.nota_aprobado) {
              aux.introduccion = {
                ...doc.cursoConductorNautico.introduccion,
                autoevaluacion: data.nota,
                aprobado: true
              }
              aux.estado = "paso1";
              // Enviar correo (Introductorio) (No hay correo al aprobar introductorio)
            } else {
              aux.introduccion = {
                ...doc.cursoConductorNautico.introduccion,
                autoevaluacion: data.nota
              }
            }
            doc.cursoConductorNautico = {
              ...doc.cursoConductorNautico,
              aux
            }
            doc.save();
          }
          
        // Renderizar estado del examen
        res.render('curso-cn/nota-examen', {
          data,
          globalVars
        });
      }
    })
  }
  if (data.autoevaluacion == 'paso1') {
    console.log(data);
    db.Usuario.findOne({_id: data.userId}, (err, doc) => {
      if (doc) {
        // Actualizar la nota siempre y cuando sea mayor a que la anterior
          if (data.nota > doc.cursoConductorNautico.paso1.autoevaluacion || doc.cursoConductorNautico.paso1.autoevaluacion == 'noRealizada') {
            aux = doc.cursoConductorNautico;
            if (!doc.cursoConductorNautico.paso1.aprobado && data.nota >= globalVars.nota_aprobado) {
              aux.paso1 = {
                ...doc.cursoConductorNautico.paso1,
                autoevaluacion: data.nota,
                aprobado: true
              }
              aux.estado = "paso2";
              // Enviar correo (Aprobó paso1)
              correos.aproboPaso1(doc.email, doc.name)

            } else {
              aux.paso1 = {
                ...doc.cursoConductorNautico.paso1,
                autoevaluacion: data.nota
              }
            }
            doc.cursoConductorNautico = {
              ...doc.cursoConductorNautico,
              aux
            }
            doc.save();
          }
          
        // Renderizar estado del examen
        res.render('curso-cn/nota-examen', {
          data,
          globalVars
        });
      }
    })
  }
  if (data.autoevaluacion == 'paso2') {
    console.log(data);
    db.Usuario.findOne({_id: data.userId}, (err, doc) => {
      console.log(data);
      if (doc) {
        // Actualizar la nota siempre y cuando sea mayor a que la anterior
          if (data.nota > doc.cursoConductorNautico.paso2.autoevaluacion || doc.cursoConductorNautico.paso2.autoevaluacion == 'noRealizada') {
            aux = doc.cursoConductorNautico;
            if (!doc.cursoConductorNautico.paso2.aprobado && data.nota >= globalVars.nota_aprobado) {
              aux.paso2 = {
                ...doc.cursoConductorNautico.paso2,
                autoevaluacion: data.nota,
                aprobado: true
              }
              aux.estado = "paso3";
              // Enviar correo (paso2)
              correos.aproboPaso2(doc.email, doc.name)

            } else {
              aux.paso2 = {
                ...doc.cursoConductorNautico.paso2,
                autoevaluacion: data.nota
              }
            }
            doc.cursoConductorNautico = {
              ...doc.cursoConductorNautico,
              aux
            }
            doc.save();
          }
          
        // Renderizar estado del examen
        res.render('curso-cn/nota-examen', {
          data,
          globalVars
        });
      }
    })
  }
  if (data.autoevaluacion == 'paso3') {
    console.log(data);
    db.Usuario.findOne({_id: data.userId}, (err, doc) => {
      console.log(data);
      if (doc) {
        // Actualizar la nota siempre y cuando sea mayor a que la anterior
          if (data.nota > doc.cursoConductorNautico.paso3.autoevaluacion || doc.cursoConductorNautico.paso3.autoevaluacion == 'noRealizada') {
            aux = doc.cursoConductorNautico;
            if (!doc.cursoConductorNautico.paso3.aprobado && data.nota >= globalVars.nota_aprobado) {
              aux.paso3 = {
                ...doc.cursoConductorNautico.paso3,
                autoevaluacion: data.nota,
                aprobado: true
              }
              aux.estado = "paso-final";
              // Enviar correo (paso3)
              correos.aproboPaso3(doc.email, doc.name)

            } else {
              aux.paso3 = {
                ...doc.cursoConductorNautico.paso3,
                autoevaluacion: data.nota
              }
            }
            doc.cursoConductorNautico = {
              ...doc.cursoConductorNautico,
              aux
            }
            doc.save();
          }
          
        // Renderizar estado del examen
        res.render('curso-cn/nota-examen', {
          data,
          globalVars
        });
      }
    })
  }

  if (data.autoevaluacion == 'final1') {
    console.log(data);
    db.Usuario.findOne({_id: data.userId}, (err, doc) => {
      if (doc) {
        // Actualizar la nota siempre y cuando sea mayor a que la anterior
          if (data.nota > doc.cursoConductorNautico.final.autoevaluacion1 || doc.cursoConductorNautico.final.autoevaluacion1 == 'noRealizada') {
            aux = doc.cursoConductorNautico;
            if (!doc.cursoConductorNautico.final.aprobado1 && data.nota >= globalVars.nota_aprobado) {
              
              aux.final = {
                ...doc.cursoConductorNautico.final,
                autoevaluacion1: data.nota,
                aprobado1: true
              }

              // Enviar el correo FINAL              
              // Se ingresa a la siguiente función por ÚNICA VEZ cuando el usuario aprobó el curso. 
              if (verificarAprobacion(aux)) {
                correos.aproboCurso(doc.email, doc.name)
                aux.estado = "aprobado";
              };

            } else {
              aux.final = {
                ...doc.cursoConductorNautico.final,
                autoevaluacion1: data.nota
              }
            }
            doc.cursoConductorNautico = {
              ...doc.cursoConductorNautico,
              aux
            }
            doc.save();
          }
          
        // Renderizar estado del examen
        res.render('curso-cn/nota-examen', {
          data,
          globalVars
        });
      }
    })
  }
  if (data.autoevaluacion == 'final2') {
    console.log(data);
    db.Usuario.findOne({_id: data.userId}, (err, doc) => {
      if (doc) {
        // Actualizar la nota siempre y cuando sea mayor a que la anterior
          if (data.nota > doc.cursoConductorNautico.final.autoevaluacion2 || doc.cursoConductorNautico.final.autoevaluacion2 == 'noRealizada') {
            aux = doc.cursoConductorNautico;
            if (!doc.cursoConductorNautico.final.aprobado2 && data.nota >= globalVars.nota_aprobado) {
              aux.final = {
                ...doc.cursoConductorNautico.final,
                autoevaluacion2: data.nota,
                aprobado2: true
              }
              // Enviar el correo FINAL
              // Se ingresa a la siguiente función por ÚNICA VEZ cuando el usuario aprobó el curso. 
              if (verificarAprobacion(aux)) {
                correos.aproboCurso(doc.email, doc.name)
                aux.estado = "aprobado";
              };

            } else {
              aux.final = {
                ...doc.cursoConductorNautico.final,
                autoevaluacion2: data.nota
              }
            }
            doc.cursoConductorNautico = {
              ...doc.cursoConductorNautico,
              aux
            }
            doc.save();
          }
          
        // Renderizar estado del examen
        res.render('curso-cn/nota-examen', {
          data,
          globalVars
        });
      }
    })
  }
}

function verificarAprobacion(aux) {
  console.log(aux.final);
  if (aux.final.autoevaluacion1 >= globalVars.nota_aprobado && aux.final.autoevaluacion2 >= globalVars.nota_aprobado) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  home,
  paso1,
  paso2,
  paso3,
  pasoFinal,
  calendario,
  completarInformacion,
  solicitarExtension,
  confirmarExamen
};
