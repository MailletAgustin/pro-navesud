function terminar(userId) {

    examenCorregido = corregir();
    
    data = {
        nota: examenCorregido.nota,
        incorrectas: examenCorregido.incorrectas,
        userId,
        autoevaluacion: "paso3",
        redireccion: "./paso-3"
    }

    document.getElementById('dataInput').value = JSON.stringify(data);
    document.getElementById('examenForm').submit();
}

function corregir() {
    let puntajeTotal = 0;
    let nota = 0;
    let incrementador = 4;
    let incorrectas = [];

    if (document.getElementById('respuesta1a').checked
        && document.getElementById('respuesta1b').checked
        && document.getElementById('respuesta1c').checked
        && !document.getElementById('respuesta1d').checked
        && document.getElementById('respuesta1e').checked
        && document.getElementById('respuesta1f').checked
        && !document.getElementById('respuesta1g').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("1") }
    if (document.getElementById('respuesta2b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("2") }
    if (document.getElementById('respuesta3b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("3") }
    if (document.getElementById('respuesta4c').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("4") }
    if (document.getElementById('respuesta5a').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("5") }
    if (!document.getElementById('respuesta6a').checked
        && document.getElementById('respuesta6b').checked
        && !document.getElementById('respuesta6c').checked
        && document.getElementById('respuesta6d').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("6") }
    if (document.getElementById('respuesta7b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("7") }
    if (document.getElementById('respuesta8b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("8") }
    if (document.getElementById('respuesta9d').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("9") }
    if (document.getElementById('respuesta10b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("10") }
    if (document.getElementById('respuesta11a').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("11") }
    if (document.getElementById('respuesta12a').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("12") }
    if (document.getElementById('respuesta13c').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("13") }
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
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("14") }
    if (document.getElementById('respuesta15a').checked
        && document.getElementById('respuesta15b').checked
        && document.getElementById('respuesta15c').checked
        && !document.getElementById('respuesta15d').checked
        && !document.getElementById('respuesta15e').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("15") }
    if (document.getElementById('respuesta16b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("16") }
    if (document.getElementById('respuesta17b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("17") }
    if (document.getElementById('respuesta18a').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("18") }
    if (document.getElementById('respuesta19b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("19") }
    if (!document.getElementById('respuesta20a').checked
        && document.getElementById('respuesta20b').checked
        && !document.getElementById('respuesta20c').checked
        && document.getElementById('respuesta20d').checked
        && !document.getElementById('respuesta20e').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("20") }
    if (document.getElementById('respuesta21a').checked
        && !document.getElementById('respuesta21b').checked
        && document.getElementById('respuesta21c').checked
        && !document.getElementById('respuesta21d').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("21") }
    if (document.getElementById('respuesta22a').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("22") }
    if (document.getElementById('respuesta23a').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("23") }
    if (document.getElementById('respuesta24b').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("24") }
    if (document.getElementById('respuesta25a').checked) {
        puntajeTotal = puntajeTotal + incrementador;
    } else { incorrectas.push("25") }

    nota = puntajeTotal;

    examenCorregido = {
        nota,
        incorrectas
    }
    return examenCorregido
}