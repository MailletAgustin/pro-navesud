function terminarUno(userId) {

    examenCorregido = corregirUno();
    
    data = {
        nota: examenCorregido.nota,
        incorrectas: examenCorregido.incorrectas,
        userId,
        autoevaluacion: "final1",
        redireccion: "./paso-final"
    }
  
    document.getElementById('dataInputUno').value = JSON.stringify(data);
    document.getElementById('examenFormUno').submit();
}

function terminarDos(userId) {

    examenCorregido = corregirDos();
    
    data = {
        nota: examenCorregido.nota,
        incorrectas: examenCorregido.incorrectas,
        userId,
        autoevaluacion: "final2",
        redireccion: "./paso-final"
    }
  
    document.getElementById('dataInputDos').value = JSON.stringify(data);
    document.getElementById('examenFormDos').submit();
}

  function corregirUno() {
    let puntosTotal = 0;
    let nota = 0;
    let incrementador = 5;
    let incorrectas = [];
  
    if (document.getElementById('respuesta1b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('1') }
    if (document.getElementById('respuesta2a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('2') }
    if (document.getElementById('respuesta3d').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('3') }
    if (document.getElementById('respuesta4b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('4') }
    if (document.getElementById('respuesta5d').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('5') }
    if (document.getElementById('respuesta6a').checked
        && !document.getElementById('respuesta6b').checked
        && !document.getElementById('respuesta6c').checked
        && document.getElementById('respuesta6d').checked
        && document.getElementById('respuesta6e').checked
        && !document.getElementById('respuesta6f').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('6') }
    if (document.getElementById('respuesta7a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('7') }
    if (document.getElementById('respuesta8b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('8') }
    if (document.getElementById('respuesta9b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('9') }
    if (document.getElementById('respuesta10b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('10') }
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
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('11') }
    if (document.getElementById('respuesta12a').checked
        && document.getElementById('respuesta12b').checked
        && document.getElementById('respuesta12c').checked
        && !document.getElementById('respuesta12d').checked
        && !document.getElementById('respuesta12e').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('12') }
    if (document.getElementById('respuesta13d').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('13') }
    if (document.getElementById('respuesta14a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('14') }
    if (document.getElementById('respuesta15b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('15') }
    if (document.getElementById('respuesta16b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('16') }
    if (document.getElementById('respuesta17a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('17') }
    if (document.getElementById('respuesta18b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('18') }
    if (document.getElementById('respuesta19b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('19') }
    if (!document.getElementById('respuesta20a').checked
        && !document.getElementById('respuesta20b').checked
        && document.getElementById('respuesta20c').checked
        && document.getElementById('respuesta20d').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('20') }
  
      nota = puntosTotal;
      examenCorregido = {
          nota,
          incorrectas
      }
      
      return examenCorregido
  }
  function corregirDos() {
    let puntosTotal = 0;
    let nota = 0;
    let incrementador = 4.34;
    let incorrectas = [];
  
    if (document.getElementById('repuesta1b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('1') }
    if (document.getElementById('repuesta2b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('2') }
    if (document.getElementById('repuesta3a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('3') }
    if (document.getElementById('repuesta4b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('4') }
    if (document.getElementById('repuesta5b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('5') }
    if (document.getElementById('repuesta61a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('6.1') }
    if (document.getElementById('repuesta62a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('6.2') }
    if (document.getElementById('repuesta63c').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('6.3') }
    if (document.getElementById('repuesta64b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('6.4') }
    if (document.getElementById('repuesta7a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('7') }
    if (document.getElementById('repuesta8b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('8') }
    if (document.getElementById('repuesta9a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('9') }
    if (document.getElementById('repuesta10b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('10') }
    if (document.getElementById('repuesta11d').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('11') }
    if (document.getElementById('repuesta12d').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('12') }
    if (document.getElementById('repuesta13b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('13') }
    if (document.getElementById('repuesta14a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('14') }
    if (document.getElementById('repuesta15b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('15') }
    if (document.getElementById('repuesta16c').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('16') }
    if (document.getElementById('repuesta17b').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('17') }
    if (document.getElementById('repuesta18a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('18') }
    if (document.getElementById('repuesta19a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('19') }
    if (document.getElementById('repuesta20a').checked) {
        puntosTotal = puntosTotal + incrementador;
    } else { incorrectas.push('20') }
  
      nota = puntosTotal;
      nota = Math.round(nota);
      examenCorregido = {
          nota,
          incorrectas
      }
      
      return examenCorregido
  }

