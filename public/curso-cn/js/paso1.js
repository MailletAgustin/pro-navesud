function terminar(userId) {

  examenCorregido = corregir();
  
  data = {
      nota: examenCorregido.nota,
      incorrectas: examenCorregido.incorrectas,
      userId,
      autoevaluacion: "paso1",
      redireccion: "./paso-1"
  }

  document.getElementById('dataInput').value = JSON.stringify(data);
  document.getElementById('examenForm').submit();
}

function corregir() {
  let puntosTotal = 0;
  let nota = 0;
  let incrementador = 3;
  let incorrectas = [];

    // Pregunta 1
    if (document.getElementById('respuesta1a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('1') }
    // Pregunta 2
    if (document.getElementById('respuesta2a').checked
    && !document.getElementById('respuesta2b').checked
    && !document.getElementById('respuesta2c').checked
    && document.getElementById('respuesta2d').checked
    && document.getElementById('respuesta2e').checked
    && !document.getElementById('respuesta2f').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('2') }
    // Pregunta 3
    if (document.getElementById('respuesta3c').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('3') }

    // Pregunta 4
    if (document.getElementById('respuesta4a').checked
    && document.getElementById('respuesta4b').checked
    && !document.getElementById('respuesta4c').checked
    && document.getElementById('respuesta4d').checked
    && !document.getElementById('respuesta4e').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('4') }
    // Pregunta 5
    if (!document.getElementById('respuesta5a').checked
    && document.getElementById('respuesta5b').checked
    && !document.getElementById('respuesta5c').checked
    && document.getElementById('respuesta5d').checked
    && !document.getElementById('respuesta5e').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('5') }
    // Pregunta 6
    if (!document.getElementById('respuesta6a').checked
    && document.getElementById('respuesta6b').checked
    && !document.getElementById('respuesta6c').checked
    && document.getElementById('respuesta6d').checked
    && !document.getElementById('respuesta6e').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('6') }

    // Pregunta 7
    if (!document.getElementById('respuesta7a').checked
    && document.getElementById('respuesta7b').checked
    && !document.getElementById('respuesta7c').checked
    && !document.getElementById('respuesta7d').checked
    && document.getElementById('respuesta7e').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('7') }
    // Pregunta 8
    if (document.getElementById('respuesta8a').checked
    && !document.getElementById('respuesta8b').checked
    && !document.getElementById('respuesta8c').checked
    && document.getElementById('respuesta8d').checked
    && !document.getElementById('respuesta8e').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('8') }
    // Pregunta 9
    if (document.getElementById('respuesta9b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('9') }
    // Pregunta 10
    if (document.getElementById('respuesta10a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('10') }
    // Pregunta 11
    if (document.getElementById('respuesta11a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('11') }
    // Pregunta 12
    if (document.getElementById('respuesta12a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('12') }
    // Pregunta 13
    if (document.getElementById('respuesta13a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('13') }
    // Pregunta 14
    if (document.getElementById('respuesta14b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('14') }
    // Pregunta 15
    if (document.getElementById('respuesta15b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('15') }
    // Pregunta 16
    if (document.getElementById('respuesta16a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('16') }
    // Pregunta 17
    if (document.getElementById('respuesta17a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('17') }
    // Pregunta 18
    if (document.getElementById('respuesta18d').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('18') }
    // Pregunta 19
    if (document.getElementById('respuesta19c').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('19') }
    // Pregunta 20
    if (document.getElementById('respuesta20b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('20') }
    // Pregunta 21
    if (document.getElementById('respuesta21e').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('21') }
    // Pregunta 22
    if (document.getElementById('respuesta22b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('22') }
    // Pregunta 23
    if (document.getElementById('respuesta23a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('23') }
    // Pregunta 24
    if (document.getElementById('respuesta24a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('24') }
    // Pregunta 25
    if (document.getElementById('respuesta25a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('25') }
    // Pregunta 26
    if (document.getElementById('respuesta26b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('26') }
    // Pregunta 27
    if (document.getElementById('respuesta27a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('27') }
    // Pregunta 28
    if (document.getElementById('respuesta28a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('28') }
    // Pregunta 29
    if (document.getElementById('respuesta29a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('29') }
    // Pregunta 30
    if (document.getElementById('respuesta30a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('30') }
    // Pregunta 31
    if (document.getElementById('respuesta31a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('31') }
    // Pregunta 32
    if (document.getElementById('respuesta32a').checked
    && document.getElementById('respuesta32b').checked
    && document.getElementById('respuesta32c').checked
    && !document.getElementById('respuesta32d').checked
    && document.getElementById('respuesta32e').checked
    && !document.getElementById('respuesta32f').checked) {
        puntosTotal = puntosTotal + incrementador + 1;
    } else { incorrectas.push('32') }
    // Pregunta 33
    if (document.getElementById('respuesta33a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('33') }

    nota = puntosTotal;
    examenCorregido = {
        nota,
        incorrectas
    }
    
    return examenCorregido
}