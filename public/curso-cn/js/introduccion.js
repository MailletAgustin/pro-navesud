function terminar(userId) {

    examenCorregido = corregir();
    
    data = {
        nota: examenCorregido.nota,
        incorrectas: examenCorregido.incorrectas,
        userId,
        autoevaluacion: "introduccion",
        redireccion: "./"
    }

    document.getElementById('dataInput').value = JSON.stringify(data);
    document.getElementById('examenForm').submit();
}

function corregir() {
    nota = 0;
    incrementador = 20;
    incorrectas = [];

    if (document.getElementById('respuesta1a').checked) {
        nota = nota + incrementador;
    } else {incorrectas.push('1')}
    if (document.getElementById('respuesta2a').checked) {
        nota = nota + incrementador;
    } else {incorrectas.push('2')}
    if (document.getElementById('respuesta3b').checked) {
        nota = nota + incrementador;
    } else {incorrectas.push('3')}
    if (document.getElementById('respuesta4a').checked) {
        nota = nota + incrementador;
    } else {incorrectas.push('4')}
    if (document.getElementById('respuesta5a').checked) {
        nota = nota + incrementador;
    } else {incorrectas.push('5')}

    examenCorregido = {
        nota,
        incorrectas
    }
    return examenCorregido
}