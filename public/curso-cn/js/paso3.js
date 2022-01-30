datos = JSON.parse(stringDatos);

// Poner los videos en orden
document.getElementById("paso3video1").currentTime = datos.paso3.video1;
document.getElementById("paso3video2").currentTime = datos.paso3.video2;
document.getElementById("paso3video3").currentTime = datos.paso3.video3;
document.getElementById("paso3video4").currentTime = datos.paso3.video4;

// Iniciar bucle
bucle();

// Leer nuevos datos
var video1count;
document.getElementById("paso3video1").onplaying = () => {
  n = datos.paso3.video1;
  video1count = setInterval(() => {
    n++;
    datos.paso3.video1 = n;
  }, 1000);
};
document.getElementById("paso3video1").onpause = () => {
  clearInterval(video1count);
};

// Leer nuevos datos
var video2count;
document.getElementById("paso3video2").onplaying = () => {
  n = datos.paso3.video2;
  video2count = setInterval(() => {
    n++;
    datos.paso3.video2 = n;
  }, 1000);
};
document.getElementById("paso3video2").onpause = () => {
  clearInterval(video2count);
};

// Leer nuevos datos
var video3count;
document.getElementById("paso3video3").onplaying = () => {
  n = datos.paso3.video3;
  video3count = setInterval(() => {
    n++;
    datos.paso3.video3 = n;
  }, 1000);
};
document.getElementById("paso3video3").onpause = () => {
  clearInterval(video3count);
};

// Leer nuevos datos
var video4count;
document.getElementById("paso3video4").onplaying = () => {
  n = datos.paso3.video4;
  video4count = setInterval(() => {
    n++;
    datos.paso3.video4 = n;
  }, 1000);
};
document.getElementById("paso3video4").onpause = () => {
  clearInterval(video4count);
};

function bucle() {
  setTimeout(() => {
    // actualizar botones
    actualizarWeb();
    actualizarDatos();
    // enviar datos al servidor
    socket.emit("setDatos", { sessionToken, datos });

    // repetir
    bucle();
  }, 5000);
}

function terminar() {
  notaFinal = Math.round(corregir());
  if (datos.paso3.autoevaluacion == "noRealizada") {
    datos.paso3.autoevaluacion = notaFinal;
  } else {
    if (datos.paso3.autoevaluacion < notaFinal) {
      datos.paso3.autoevaluacion = notaFinal;
    }
  }
  mostrarNota(notaFinal);
}

function mostrarNota(notaFinal) {
  if (notaFinal >= 70) {
    Swal.fire(
          '¡Felicidades!',
          'Has aprobado la autoevaluación con ' + notaFinal + ' ! ',
          'success'
        )
  } else {
    Swal.fire(
      'Ups!',
      'Has reprobado la autoevaluación con ' + notaFinal + ' ! ',
      'error'
    )
  }
}

function corregir() {
    var puntajeTotal = 0;
    var valorPregunta = 4;
    if (document.getElementById('respuesta1a').checked
        && document.getElementById('respuesta1b').checked
        && document.getElementById('respuesta1c').checked
        && !document.getElementById('respuesta1d').checked
        && document.getElementById('respuesta1e').checked
        && document.getElementById('respuesta1f').checked
        && !document.getElementById('respuesta1g').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta2b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta3b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta4c').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta5a').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (!document.getElementById('respuesta6a').checked
        && document.getElementById('respuesta6b').checked
        && !document.getElementById('respuesta6c').checked
        && document.getElementById('respuesta6d').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta7b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta8b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta9d').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta10b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta11a').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta12a').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta13c').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (!document.getElementById('respuesta14a').checked
        && document.getElementById('respuesta14b').checked
        && document.getElementById('respuesta14c').checked
        && !document.getElementById('respuesta14d').checked
        && document.getElementById('respuesta14e').checked
        && !document.getElementById('respuesta14f').checked
        && !document.getElementById('respuesta14g').checked
        && document.getElementById('respuesta14h').checked
        && !document.getElementById('respuesta14i').checked
        && document.getElementById('respuesta14j').checked
        && document.getElementById('respuesta14k').checked
        && !document.getElementById('respuesta14l').checked
        && document.getElementById('respuesta14m').checked
        && !document.getElementById('respuesta14n').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta15a').checked
        && document.getElementById('respuesta15b').checked
        && document.getElementById('respuesta15c').checked
        && !document.getElementById('respuesta15d').checked
        && !document.getElementById('respuesta15e').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta16b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta17b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta18a').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta19b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (!document.getElementById('respuesta20a').checked
        && document.getElementById('respuesta20b').checked
        && !document.getElementById('respuesta20c').checked
        && document.getElementById('respuesta20d').checked
        && !document.getElementById('respuesta20e').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta21a').checked
        && !document.getElementById('respuesta21b').checked
        && document.getElementById('respuesta21c').checked
        && !document.getElementById('respuesta21d').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta22a').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta23a').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta24b').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }
    if (document.getElementById('respuesta25a').checked) {
        puntajeTotal = puntajeTotal + valorPregunta;
    }

  notaFinal = puntajeTotal;

  return notaFinal;
}

function setCookie(cname, cvalue, exMins) {
  var d = new Date();
  d.setTime(d.getTime() + exMins * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

socket.on("desconectarUsuario", () => {
  setCookie("sessionToken", "", 0);
  this.location.reload();
});

function actualizarWeb() {
  // Barra de progreso 1
  document.getElementById("BARpaso3video1").style.width =
    (datos.paso3.video1 * 100) /
      document.getElementById("paso3video1").duration +
    "%";
    pg1 = Math.round((datos.paso3.video1 * 100) / document.getElementById("paso3video1").duration );
    if (pg1 > 100) {pg1 = 100}
    document.getElementById("BARpaso3video1").textContent = pg1 + '%';

  // Barra de progreso 2
  document.getElementById("BARpaso3video2").style.width =
    (datos.paso3.video2 * 100) /
      document.getElementById("paso3video2").duration +
    "%";
    pg1 = Math.round((datos.paso3.video2 * 100) / document.getElementById("paso3video2").duration );
    if (pg1 > 100) {pg1 = 100}
    document.getElementById("BARpaso3video2").textContent = pg1 + '%';

  // Barra de progreso 3
  document.getElementById("BARpaso3video3").style.width =
    (datos.paso3.video3 * 100) /
      document.getElementById("paso3video3").duration +
    "%";
    pg1 = Math.round((datos.paso3.video3 * 100) / document.getElementById("paso3video3").duration );
    if (pg1 > 100) {pg1 = 100}
    document.getElementById("BARpaso3video3").textContent = pg1 + '%';

  // Barra de progreso 4
  document.getElementById("BARpaso3video4").style.width =
    (datos.paso3.video4 * 100) /
      document.getElementById("paso3video4").duration +
    "%";
    pg1 = Math.round((datos.paso3.video4 * 100) / document.getElementById("paso3video4").duration );
    if (pg1 > 100) {pg1 = 100}
    document.getElementById("BARpaso3video4").textContent = pg1 + '%';

  // Botón menú paso final
  if (datos.paso3.autoevaluacion > 69) {
    document.getElementById("menuPaso4").href = "/cursos/conductor-nautico/paso-final";
    document.getElementById("menuPaso4").innerHTML =
      '<i class="fa fa-unlock-alt" aria-hidden="true"></i> &nbsp Final ';
  }

  // Boton hacer AUTOEVALUACION
  if (
    (datos.paso3.video1 * 100) /
      document.getElementById("paso3video1").duration >
      69 &&
    (datos.paso3.video2 * 100) /
      document.getElementById("paso3video2").duration >
      69 &&
    (datos.paso3.video3 * 100) /
      document.getElementById("paso3video3").duration >
      69 &&
    (datos.paso3.video4 * 100) /
      document.getElementById("paso3video4").duration >
      69 &&
    datos.paso3.autoevaluacion == "noRealizada"
  ) {
    document.getElementById("autoevaluacion1").disabled = false;
    document.getElementById("autoevaluacion1").textContent =
      "Realizar autoevaluación 3.";
  }

  if (
    (datos.paso3.video1 * 100) /
      document.getElementById("paso3video1").duration <
      70 ||
    (datos.paso3.video2 * 100) /
      document.getElementById("paso3video2").duration <
      70 ||
    (datos.paso3.video3 * 100) /
      document.getElementById("paso3video3").duration <
      70 ||
    ((datos.paso3.video4 * 100) /
      document.getElementById("paso3video4").duration <
      70 &&
      datos.paso3.autoevaluacion == "noRealizada")
  ) {
    document.getElementById("autoevaluacion1").disabled = true;
    document.getElementById("autoevaluacion1").textContent =
      "Realizar autoevaluación (Aún te falta ver algunos videos)";
  }

  if (datos.paso3.autoevaluacion != "noRealizada") {
    document.getElementById("autoevaluacion1").disabled = false;
    document.getElementById(
      "autoevaluacion1"
    ).textContent = `Realizar autoevaluación. [Nota mas alta: ${datos.paso3.autoevaluacion}]`;
  }

  if (datos.paso3.autoevaluacion > 69) {
    document.getElementById("irPaso4fromPaso3").disabled = false;
  }
}

function actualizarDatos() {
  if (datos.paso3.iniciado != true) {
    datos.paso3.iniciado = true;
    datos.estado = 'paso3';
    datos.iniciopaso3 = fechaServidor;
    socket.emit('enviarCorreo', {paso: 3, sessionToken})
  }
}