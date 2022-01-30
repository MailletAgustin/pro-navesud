// Convertir datos en obj
datos = JSON.parse(stringDatos);

// Poner los videos en orden
document.getElementById("introduccion1").currentTime =
  datos.introduccion.video1;
bucle();

// leer nuevos datos
var introduccion1count;
document.getElementById("introduccion1").onplaying = () => {
  n = datos.introduccion.video1;
  introduccion1count = setInterval(() => {
    n++;
    datos.introduccion.video1 = n;
  }, 1000);
};
document.getElementById("introduccion1").onpause = () => {
  clearInterval(introduccion1count);
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

function setCookie(cname, cvalue, exMins) {
  var d = new Date();
  d.setTime(d.getTime() + exMins * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function actualizarWeb() {
  // Barra de progreso 1
  document.getElementById("introVideoProgressBar").style.width =
    (datos.introduccion.video1 * 100) /
      document.getElementById("introduccion1").duration +
    "%";
    pg1 = Math.round((datos.introduccion.video1 * 100) / document.getElementById("introduccion1").duration );
    if (pg1 > 100) {pg1 = 100}
  document.getElementById("introVideoProgressBar").textContent = pg1 + '%';

  // Botón menú paso 1
  if (
    (datos.introduccion.video1 * 100) /
      document.getElementById("introduccion1").duration >
    70
  ) {
    document.getElementById("botonIrPaso1").disabled = false;
    document.getElementById("menuPaso1").href =
      "/cursos/conductor-nautico/paso-1";
    document.getElementById("menuPaso1").innerHTML =
      '<i class="fa fa-unlock-alt" aria-hidden="true"></i> &nbsp Paso 1 ';
  }
  // Botón menú paso 2
  if (datos.paso1.autoevaluacion > 69) {
    document.getElementById("menuPaso2").href =
      "/cursos/conductor-nautico/paso-2";
    document.getElementById("menuPaso2").innerHTML =
      '<i class="fa fa-unlock-alt" aria-hidden="true"></i> &nbsp Paso 2 ';
  }
  // Botón menú paso 3
  if (datos.paso2.autoevaluacion > 69) {
    document.getElementById("menuPaso3").href =
      "/cursos/conductor-nautico/paso-3";
    document.getElementById("menuPaso3").innerHTML =
      '<i class="fa fa-unlock-alt" aria-hidden="true"></i> &nbsp Paso 3 ';
  }
  // Botón menú paso final
  if (datos.paso3.autoevaluacion > 69) {
    document.getElementById("menuFinal").href =
      "/cursos/conductor-nautico/paso-final";
    document.getElementById("menuFinal").innerHTML =
      '<i class="fa fa-unlock-alt" aria-hidden="true"></i> &nbsp Final ';
  }
}

socket.on("desconectarUsuario", () => {
  setCookie("sessionToken", "", 0);
  this.location.reload();
});

function actualizarDatos() {
  if (datos.introduccion.iniciado != true) {
    datos.introduccion.iniciado = true;
    datos.estado = "introduccion";
    datos.inicioIntroduccion = fechaServidor;
  }
}
