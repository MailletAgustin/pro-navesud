function terminar(userId) {

    examenCorregido = corregir();
    
    data = {
        nota: examenCorregido.nota,
        incorrectas: examenCorregido.incorrectas,
        userId,
        autoevaluacion: "paso2",
        redireccion: "./paso-2"
    }

    document.getElementById('dataInput').value = JSON.stringify(data);
    document.getElementById('examenForm').submit();
}

function corregir() {
    let puntajeTotal = 0;
    let nota = 0;
    let incrementador = 2.857;
    let incorrectas = [];

    if (document.getElementById("respuesta1a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('1') }
      if (document.getElementById("respuesta2b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('2') }
      if (document.getElementById("respuesta3d").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('3') }
      if (document.getElementById("respuesta4a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('4') }
      if (document.getElementById("respuesta5a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('5') }
      if (document.getElementById("respuesta6b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('6') }
      if (
        !document.getElementById("respuesta7a").checked &&
        document.getElementById("respuesta7b").checked &&
        document.getElementById("respuesta7c").checked &&
        document.getElementById("respuesta7d").checked &&
        !document.getElementById("respuesta7e").checked
      ) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('7') }
      if (document.getElementById("respuesta8b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('8') }
      if (document.getElementById("respuesta9c").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('9') }
      if (document.getElementById("respuesta10a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('10') }
      if (document.getElementById("respuesta11c").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('11') }
      if (document.getElementById("respuesta12b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('12') }
      if (document.getElementById("respuesta13b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('13') }
      if (
        !document.getElementById("respuesta14a").checked &&
        document.getElementById("respuesta14b").checked &&
        document.getElementById("respuesta14c").checked &&
        !document.getElementById("respuesta14d").checked
      ) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('14') }
      if (document.getElementById("respuesta15b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('15') }
      if (document.getElementById("respuesta16a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('16') }
      if (document.getElementById("respuesta17b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('17') }
      if (document.getElementById("respuesta18a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('18') }
      if (document.getElementById("respuesta19a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('19') }
      if (document.getElementById("respuesta20a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('20') }
      if (document.getElementById("respuesta21b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('21') }
      if (
        document.getElementById("respuesta22a").checked &&
        document.getElementById("respuesta22b").checked &&
        document.getElementById("respuesta22c").checked
      ) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('22') }
      if (document.getElementById("respuesta23a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('23') }
      if (document.getElementById("respuesta24c").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('24') }
      if (document.getElementById("respuesta25b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('25') }
      if (document.getElementById("respuesta26a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('26') }
      if (document.getElementById("respuesta27a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('27') }
      if (document.getElementById("respuesta28a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('28') }
      if (document.getElementById("respuesta29a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('29') }
      if (document.getElementById("respuesta30a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('30') }
      if (
        !document.getElementById("respuesta31a").checked &&
        !document.getElementById("respuesta31b").checked &&
        document.getElementById("respuesta31c").checked &&
        document.getElementById("respuesta31d").checked
      ) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('31') }
      if (document.getElementById("respuesta32b").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('32') }
      if (document.getElementById("respuesta33a").checked) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('33') }
      if (
        document.getElementById("respuesta34a").checked &&
        document.getElementById("respuesta34b").checked &&
        document.getElementById("respuesta34c").checked &&
        !document.getElementById("respuesta34d").checked
      ) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('34') }
      if (
        !document.getElementById("respuesta35a").checked &&
        document.getElementById("respuesta35b").checked &&
        document.getElementById("respuesta35c").checked &&
        document.getElementById("respuesta35d").checked
      ) {
        puntajeTotal = puntajeTotal + incrementador;
      } else { incorrectas.push('35') }

      nota = Math.round(puntajeTotal);

    examenCorregido = {
        nota,
        incorrectas
    }
    return examenCorregido
}