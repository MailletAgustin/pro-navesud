datos = JSON.parse(stringDatos);

// Poner los videos en orden
document.getElementById('paso1video1').currentTime = datos.paso1.video1;
document.getElementById('paso1video2').currentTime = datos.paso1.video2;
document.getElementById('paso1video3').currentTime = datos.paso1.video3;
document.getElementById('paso1video4').currentTime = datos.paso1.video4;

// Iniciar bucle
bucle();

// Leer nuevos datos
var video1count;
document.getElementById("paso1video1").onplaying = () => {
  n = datos.paso1.video1;
  video1count = setInterval(() => {
    n++;
    datos.paso1.video1 = n;
  }, 1000);
};
document.getElementById("paso1video1").onpause = () => {
  clearInterval(video1count);
};

// Leer nuevos datos
var video2count;
document.getElementById("paso1video2").onplaying = () => {
  n = datos.paso1.video2;
  video2count = setInterval(() => {
    n++;
    datos.paso1.video2 = n;
  }, 1000);
};
document.getElementById("paso1video2").onpause = () => {
  clearInterval(video2count);
};

// Leer nuevos datos
var video3count;
document.getElementById("paso1video3").onplaying = () => {
  n = datos.paso1.video3;
  video3count = setInterval(() => {
    n++;
    datos.paso1.video3 = n;
  }, 1000);
};
document.getElementById("paso1video3").onpause = () => {
  clearInterval(video3count);
};

// Leer nuevos datos
var video4count;
document.getElementById("paso1video4").onplaying = () => {
  n = datos.paso1.video4;
  video4count = setInterval(() => {
    n++;
    datos.paso1.video4 = n;
  }, 1000);
};
document.getElementById("paso1video4").onpause = () => {
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
    notaFinal = corregir();
    if (datos.paso1.autoevaluacion == 'noRealizada') {
        datos.paso1.autoevaluacion = notaFinal;
    } else {
        if (datos.paso1.autoevaluacion < notaFinal) {
            datos.paso1.autoevaluacion = notaFinal;
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
        puntosTotal = 0;

        // Pregunta 1
        if (document.getElementById('respuesta1a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 2
        if (document.getElementById('respuesta2a').checked
        && !document.getElementById('respuesta2b').checked
        && !document.getElementById('respuesta2c').checked
        && document.getElementById('respuesta2d').checked
        && document.getElementById('respuesta2e').checked
        && !document.getElementById('respuesta2f').checked) {
            puntosTotal = puntosTotal +3;
        }
        // Pregunta 3
        if (document.getElementById('respuesta3c').checked) {
            puntosTotal = puntosTotal + 3
        }
        
        // Pregunta 4
        if (document.getElementById('respuesta4a').checked
        && document.getElementById('respuesta4b').checked
        && !document.getElementById('respuesta4c').checked
        && document.getElementById('respuesta4d').checked
        && !document.getElementById('respuesta4e').checked) {
            puntosTotal = puntosTotal +3;
        }
        // Pregunta 5
        if (!document.getElementById('respuesta5a').checked
        && document.getElementById('respuesta5b').checked
        && !document.getElementById('respuesta5c').checked
        && document.getElementById('respuesta5d').checked
        && !document.getElementById('respuesta5e').checked) {
            puntosTotal = puntosTotal +3;
        }
        // Pregunta 6
        if (!document.getElementById('respuesta6a').checked
        && document.getElementById('respuesta6b').checked
        && !document.getElementById('respuesta6c').checked
        && document.getElementById('respuesta6d').checked
        && !document.getElementById('respuesta6e').checked) {
            puntosTotal = puntosTotal +3;
        }
        
        // Pregunta 7
        if (!document.getElementById('respuesta7a').checked
        && document.getElementById('respuesta7b').checked
        && !document.getElementById('respuesta7c').checked
        && !document.getElementById('respuesta7d').checked
        && document.getElementById('respuesta7e').checked) {
            puntosTotal = puntosTotal +3;
        }
        // Pregunta 8
        if (document.getElementById('respuesta8a').checked
        && !document.getElementById('respuesta8b').checked
        && !document.getElementById('respuesta8c').checked
        && document.getElementById('respuesta8d').checked
        && !document.getElementById('respuesta8e').checked) {
            puntosTotal = puntosTotal +3;
        }
        // Pregunta 9
        if (document.getElementById('respuesta9b').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 10
        if (document.getElementById('respuesta10a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 11
        if (document.getElementById('respuesta11a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 12
        if (document.getElementById('respuesta12a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 13
        if (document.getElementById('respuesta13a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 14
        if (document.getElementById('respuesta14b').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 15
        if (document.getElementById('respuesta15b').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 16
        if (document.getElementById('respuesta16a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 17
        if (document.getElementById('respuesta17a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 18
        if (document.getElementById('respuesta18d').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 19
        if (document.getElementById('respuesta19c').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 20
        if (document.getElementById('respuesta20b').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 21
        if (document.getElementById('respuesta21e').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 22
        if (document.getElementById('respuesta22b').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 23
        if (document.getElementById('respuesta23a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 24
        if (document.getElementById('respuesta24a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 25
        if (document.getElementById('respuesta25a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 26
        if (document.getElementById('respuesta26b').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 27
        if (document.getElementById('respuesta27a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 28
        if (document.getElementById('respuesta28a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 29
        if (document.getElementById('respuesta29a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 30
        if (document.getElementById('respuesta30a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 31
        if (document.getElementById('respuesta31a').checked) {
            puntosTotal = puntosTotal + 3
        }
        // Pregunta 32
        if (document.getElementById('respuesta32a').checked
        && document.getElementById('respuesta32b').checked
        && document.getElementById('respuesta32c').checked
        && !document.getElementById('respuesta32d').checked
        && document.getElementById('respuesta32e').checked
        && !document.getElementById('respuesta32f').checked) {
            puntosTotal = puntosTotal +4;
        }
        
        // Pregunta 33
        if (document.getElementById('respuesta33a').checked) {
            puntosTotal = puntosTotal + 3
        }

        notaFinal = puntosTotal;
        
        return notaFinal
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
    document.getElementById("BARpaso1video1").style.width =
      (datos.paso1.video1 * 100) /
        document.getElementById("paso1video1").duration +
      "%";
      pg1 = Math.round((datos.paso1.video1 * 100) / document.getElementById("paso1video1").duration );
      if (pg1 > 100) {pg1 = 100}
      document.getElementById("BARpaso1video1").textContent = pg1 + '%';

    // Barra de progreso 2
      document.getElementById("BARpaso1video2").style.width =
      (datos.paso1.video2 * 100) /
        document.getElementById("paso1video2").duration +
      "%";
      pg1 = Math.round((datos.paso1.video2 * 100) / document.getElementById("paso1video2").duration );
      if (pg1 > 100) {pg1 = 100}
      document.getElementById("BARpaso1video2").textContent = pg1 + '%';

    // Barra de progreso 3
    document.getElementById("BARpaso1video3").style.width =
      (datos.paso1.video3 * 100) /
        document.getElementById("paso1video3").duration +
      "%";
      pg1 = Math.round((datos.paso1.video3 * 100) / document.getElementById("paso1video3").duration );
      if (pg1 > 100) {pg1 = 100}
      document.getElementById("BARpaso1video3").textContent = pg1 + '%';
      
    // Barra de progreso 4
    document.getElementById("BARpaso1video4").style.width =
      (datos.paso1.video4 * 100) /
        document.getElementById("paso1video4").duration +
      "%";
      pg1 = Math.round((datos.paso1.video4 * 100) / document.getElementById("paso1video4").duration );
      if (pg1 > 100) {pg1 = 100}
      document.getElementById("BARpaso1video4").textContent = pg1 + '%';

      if (datos.paso1.autoevaluacion > 69) {
        document.getElementById("menuPaso2").href = "paso-2";
        document.getElementById("menuPaso2").innerHTML =
          '<i class="fa fa-unlock-alt" aria-hidden="true"></i> &nbsp Paso 2 ';
      }
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
        (datos.paso1.video1 * 100) / document.getElementById("paso1video1").duration > 69 && 
        (datos.paso1.video2 * 100) / document.getElementById("paso1video2").duration > 69 && 
        (datos.paso1.video3 * 100) / document.getElementById("paso1video3").duration > 69 && 
        (datos.paso1.video4 * 100) / document.getElementById("paso1video4").duration > 69 &&
        (datos.paso1.autoevaluacion == 'noRealizada')
    ) {
        document.getElementById('autoevaluacion1').disabled = false;
        document.getElementById('autoevaluacion1').textContent = 'Realizar autoevaluación 1.';
    }
    
    if (
        (datos.paso1.video1 * 100) / document.getElementById("paso1video1").duration < 70 || 
        (datos.paso1.video2 * 100) / document.getElementById("paso1video2").duration < 70 || 
        (datos.paso1.video3 * 100) / document.getElementById("paso1video3").duration < 70 || 
        (datos.paso1.video4 * 100) / document.getElementById("paso1video4").duration < 70 &&
        (datos.paso1.autoevaluacion == 'noRealizada')
    ) {
        document.getElementById('autoevaluacion1').disabled = true;
        document.getElementById('autoevaluacion1').textContent = 'Realizar autoevaluación (Aún te falta ver algunos videos)';
    }

    if (datos.paso1.autoevaluacion != 'noRealizada') {
        document.getElementById('autoevaluacion1').disabled = false;
        document.getElementById('autoevaluacion1').textContent = `Realizar autoevaluación. [Nota mas alta: ${datos.paso1.autoevaluacion}]`;
    }

    if (datos.paso1.autoevaluacion > 69) {
        document.getElementById('irPaso2fromPaso1').disabled = false;
    }
}

function actualizarDatos() {
  if (datos.paso1.iniciado != true) {
    datos.paso1.iniciado = true;
    datos.estado = 'paso1';
    datos.iniciopaso1 = fechaServidor;
  }
}
