datos = JSON.parse(stringDatos);

// Iniciar bucle
bucle();

function bucle() {
  setTimeout(() => {
    // actualizar botones y mensajes
    actualizarWeb();
    verificarCursoAprobado(datos.final.autoevaluacion1, datos.final.autoevaluacion2);
    // enviar datos al servidor
    socket.emit("setDatos", { sessionToken, datos });

    // repetir
    bucle();
  }, 5000);
}

function actualizarWeb() {
    if (datos.final.autoevaluacion1 == 'noRealizada') {
        document.getElementById('autoevaluacion1').textContent = '[Autoevaluación: SEGURIDAD] - Sin realizar'
    }
    if (datos.final.autoevaluacion2 == 'noRealizada') {
        document.getElementById('autoevaluacion2').textContent = '[Autoevaluación: LEGISLACIÓN Y REGLAMENTACIÓN] - Sin realizar'
    }
    if (datos.final.autoevaluacion1 != "noRealizada") {
        document.getElementById(
        "autoevaluacion1"
        ).textContent = `[Autoevaluación: SEGURIDAD] - Nota actual: ${datos.final.autoevaluacion1}`;
    }

    if (datos.final.autoevaluacion2 != "noRealizada") {
        document.getElementById(
        "autoevaluacion2"
        ).textContent = `[Autoevaluación: LEGISLACIÓN Y REGLAMENTACIÓN] - Nota actual: ${datos.final.autoevaluacion2}`;
    }


    if (datos.estado == 'aprobado') {
        document.getElementById('container-aprobado').style.display = 'inline';
        document.getElementById('desaprobadoTitulo').style.display = 'none';
        document.getElementById('texto-final').style.display = 'none';
        document.getElementsByClassName('diasRestantes')[0].style.display = 'none';
    }
}

function terminarUno() {
    notaFinal = Math.round(corregirUno());
    if (datos.final.autoevaluacion1 == "noRealizada") {
      datos.final.autoevaluacion1 = notaFinal;
    } else {
      if (datos.final.autoevaluacion1 < notaFinal) {
        datos.final.autoevaluacion1 = notaFinal;
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

function corregirUno() {
    let puntajeTotal = 0;
    let valorPregunta = 5;
        if (document.getElementById('respuesta1b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta2a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta3d').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta4b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta5d').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta6a').checked
            && !document.getElementById('respuesta6b').checked
            && !document.getElementById('respuesta6c').checked
            && document.getElementById('respuesta6d').checked
            && document.getElementById('respuesta6e').checked
            && !document.getElementById('respuesta6f').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta7a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta8b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta9b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta10b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (!document.getElementById('respuesta11a').checked
            && document.getElementById('respuesta11b').checked
            && document.getElementById('respuesta11c').checked
            && !document.getElementById('respuesta11d').checked
            && document.getElementById('respuesta11e').checked
            && !document.getElementById('respuesta11f').checked
            && !document.getElementById('respuesta11g').checked
            && document.getElementById('respuesta11h').checked
            && !document.getElementById('respuesta11i').checked
            && document.getElementById('respuesta11j').checked
            && document.getElementById('respuesta11k').checked
            && !document.getElementById('respuesta11l').checked
            && document.getElementById('respuesta11m').checked
            && !document.getElementById('respuesta11n').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta12a').checked
            && document.getElementById('respuesta12b').checked
            && document.getElementById('respuesta12c').checked
            && !document.getElementById('respuesta12d').checked
            && !document.getElementById('respuesta12e').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta13d').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta14a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta15b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta16b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta17a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta18b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('respuesta19b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (!document.getElementById('respuesta20a').checked
            && !document.getElementById('respuesta20b').checked
            && document.getElementById('respuesta20c').checked
            && document.getElementById('respuesta20d').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }

    notaFinal = puntajeTotal;
    return notaFinal
}

function terminarDos() {
    notaFinal = Math.round(corregirDos());
    if (datos.final.autoevaluacion2 == "noRealizada") {
      datos.final.autoevaluacion2 = notaFinal;
    } else {
      if (datos.final.autoevaluacion2 < notaFinal) {
        datos.final.autoevaluacion2 = notaFinal;
      }
    }
    mostrarNota(notaFinal);
}

function corregirDos() {
    var puntajeTotal = 0;
        valorPregunta = 4.347826086956522;
        if (document.getElementById('repuesta1b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta2b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta3a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta4b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta5b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta61a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta62a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta63c').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta64b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta7a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta8b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta9a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta10b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta11d').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta12d').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta13b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta14a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta15b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta16c').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta17b').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta18a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta19a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        if (document.getElementById('repuesta20a').checked) {
            puntajeTotal = puntajeTotal + valorPregunta;
        }
        notaFinal = puntajeTotal;
        return notaFinal;
}

function verificarCursoAprobado(nota1, nota2) {
    if (datos.estado != 'aprobado') {
        if (nota1 != 'noRealizada' && nota2 != 'noRealizada') {
            if (nota1 > 69 && nota2 > 69) {
                datos.estado = 'aprobado';
                datos.fechaAprobacion = fechaServidor;
                socket.emit('enviarCorreo', {paso: 5, sessionToken})
            }
        }
    } 
    if (datos.final.iniciado != true) {
        datos.final.iniciado = true;
        datos.estado = 'paso-final';
        datos.iniciopasofinal = fechaServidor;
        socket.emit('enviarCorreo', {paso: 4, sessionToken})
    }
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

function descargarCertificado() {
    domtoimage.toJpeg(document.getElementById('certificado'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'curso-aprobado-certificado.jpeg';
        link.href = dataUrl;
        link.click();
    });

}