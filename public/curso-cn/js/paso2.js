datos = JSON.parse(stringDatos);

// Poner los videos en orden
document.getElementById("paso2video1").currentTime = datos.paso2.video1;
document.getElementById("paso2video2").currentTime = datos.paso2.video2;
document.getElementById("paso2video3").currentTime = datos.paso2.video3;
document.getElementById("paso2video4").currentTime = datos.paso2.video4;

// Iniciar bucle
bucle();

// Leer nuevos datos
var video1count;
document.getElementById("paso2video1").onplaying = () => {
  n = datos.paso2.video1;
  video1count = setInterval(() => {
    n++;
    datos.paso2.video1 = n;
  }, 1000);
};
document.getElementById("paso2video1").onpause = () => {
  clearInterval(video1count);
};

// Leer nuevos datos
var video2count;
document.getElementById("paso2video2").onplaying = () => {
  n = datos.paso2.video2;
  video2count = setInterval(() => {
    n++;
    datos.paso2.video2 = n;
  }, 1000);
};
document.getElementById("paso2video2").onpause = () => {
  clearInterval(video2count);
};

// Leer nuevos datos
var video3count;
document.getElementById("paso2video3").onplaying = () => {
  n = datos.paso2.video3;
  video3count = setInterval(() => {
    n++;
    datos.paso2.video3 = n;
  }, 1000);
};
document.getElementById("paso2video3").onpause = () => {
  clearInterval(video3count);
};

// Leer nuevos datos
var video4count;
document.getElementById("paso2video4").onplaying = () => {
  n = datos.paso2.video4;
  video4count = setInterval(() => {
    n++;
    datos.paso2.video4 = n;
  }, 1000);
};
document.getElementById("paso2video4").onpause = () => {
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
  if (datos.paso2.autoevaluacion == "noRealizada") {
    datos.paso2.autoevaluacion = notaFinal;
  } else {
    if (datos.paso2.autoevaluacion < notaFinal) {
      datos.paso2.autoevaluacion = notaFinal;
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
  valorPregunta = 2.857;
  if (document.getElementById("respuesta1a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta2b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta3d").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta4a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta5a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta6b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (
    !document.getElementById("respuesta7a").checked &&
    document.getElementById("respuesta7b").checked &&
    document.getElementById("respuesta7c").checked &&
    document.getElementById("respuesta7d").checked &&
    !document.getElementById("respuesta7e").checked
  ) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta8b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta9c").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta10a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta11c").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta12b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta13b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (
    !document.getElementById("respuesta14a").checked &&
    document.getElementById("respuesta14b").checked &&
    document.getElementById("respuesta14c").checked &&
    !document.getElementById("respuesta14d").checked
  ) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta15b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta16a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta17b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta18a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta19a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta20a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta21b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (
    document.getElementById("respuesta22a").checked &&
    document.getElementById("respuesta22b").checked &&
    document.getElementById("respuesta22c").checked
  ) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta23a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta24c").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta25b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta26a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta27a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta28a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta29a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta30a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (
    !document.getElementById("respuesta31a").checked &&
    !document.getElementById("respuesta31b").checked &&
    document.getElementById("respuesta31c").checked &&
    document.getElementById("respuesta31d").checked
  ) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta32b").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (document.getElementById("respuesta33a").checked) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (
    document.getElementById("respuesta34a").checked &&
    document.getElementById("respuesta34b").checked &&
    document.getElementById("respuesta34c").checked &&
    !document.getElementById("respuesta34d").checked
  ) {
    puntajeTotal = puntajeTotal + valorPregunta;
  }
  if (
    !document.getElementById("respuesta35a").checked &&
    document.getElementById("respuesta35b").checked &&
    document.getElementById("respuesta35c").checked &&
    document.getElementById("respuesta35d").checked
  ) {
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
  document.getElementById("BARpaso2video1").style.width =
    (datos.paso2.video1 * 100) /
      document.getElementById("paso2video1").duration +
    "%";
    pg1 = Math.round((datos.paso2.video1 * 100) / document.getElementById("paso2video1").duration );
    if (pg1 > 100) {pg1 = 100}
    document.getElementById("BARpaso2video1").textContent = pg1 + '%';

  // Barra de progreso 2
  document.getElementById("BARpaso2video2").style.width =
    (datos.paso2.video2 * 100) /
      document.getElementById("paso2video2").duration +
    "%";
    pg1 = Math.round((datos.paso2.video2 * 100) / document.getElementById("paso2video2").duration );
    if (pg1 > 100) {pg1 = 100}
    document.getElementById("BARpaso2video2").textContent = pg1 + '%';

  // Barra de progreso 3
  document.getElementById("BARpaso2video3").style.width =
    (datos.paso2.video3 * 100) /
      document.getElementById("paso2video3").duration +
    "%";
    pg1 = Math.round((datos.paso2.video3 * 100) / document.getElementById("paso2video3").duration );
    if (pg1 > 100) {pg1 = 100}
    document.getElementById("BARpaso2video3").textContent = pg1 + '%';

  // Barra de progreso 4
  document.getElementById("BARpaso2video4").style.width =
    (datos.paso2.video4 * 100) /
      document.getElementById("paso2video4").duration +
    "%";
    pg1 = Math.round((datos.paso2.video4 * 100) / document.getElementById("paso2video4").duration );
    if (pg1 > 100) {pg1 = 100}
    document.getElementById("BARpaso2video4").textContent = pg1 + '%';

  // Botón menú paso 3
  if (datos.paso2.autoevaluacion > 69) {
    document.getElementById("menuPaso3").href = "paso-3";
    document.getElementById("menuPaso3").innerHTML =
      '<i class="fa fa-unlock-alt" aria-hidden="true"></i> &nbsp Paso 3 ';
  }
  // Botón menú paso final
  if (datos.paso3.autoevaluacion > 69) {
    document.getElementById("menuFinal").href = "paso-final";
    document.getElementById("menuFinal").innerHTML =
      '<i class="fa fa-unlock-alt" aria-hidden="true"></i> &nbsp Final ';
  }

  // Boton hacer AUTOEVALUACION
  if (
    (datos.paso2.video1 * 100) /
      document.getElementById("paso2video1").duration >
      69 &&
    (datos.paso2.video2 * 100) /
      document.getElementById("paso2video2").duration >
      69 &&
    (datos.paso2.video3 * 100) /
      document.getElementById("paso2video3").duration >
      69 &&
    (datos.paso2.video4 * 100) /
      document.getElementById("paso2video4").duration >
      69 &&
    datos.paso2.autoevaluacion == "noRealizada"
  ) {
    document.getElementById("autoevaluacion1").disabled = false;
    document.getElementById("autoevaluacion1").textContent =
      "Realizar autoevaluación 2.";
  }

  if (
    (datos.paso2.video1 * 100) /
      document.getElementById("paso2video1").duration <
      70 ||
    (datos.paso2.video2 * 100) /
      document.getElementById("paso2video2").duration <
      70 ||
    (datos.paso2.video3 * 100) /
      document.getElementById("paso2video3").duration <
      70 ||
    ((datos.paso2.video4 * 100) /
      document.getElementById("paso2video4").duration <
      70 &&
      datos.paso2.autoevaluacion == "noRealizada")
  ) {
    document.getElementById("autoevaluacion1").disabled = true;
    document.getElementById("autoevaluacion1").textContent =
      "Realizar autoevaluación (Aún te falta ver algunos videos)";
  }

  if (datos.paso2.autoevaluacion != "noRealizada") {
    document.getElementById("autoevaluacion1").disabled = false;
    document.getElementById(
      "autoevaluacion1"
    ).textContent = `Realizar autoevaluación. [Nota mas alta: ${datos.paso2.autoevaluacion}]`;
  }

  if (datos.paso2.autoevaluacion > 69) {
    document.getElementById("irPaso3fromPaso2").disabled = false;
  }
}

function actualizarDatos() {
  if (datos.paso2.iniciado != true) {
    datos.paso2.iniciado = true;
    datos.estado = 'paso2';
    datos.iniciopaso2 = fechaServidor;
    socket.emit('enviarCorreo', {paso: 2, sessionToken})
  }
}