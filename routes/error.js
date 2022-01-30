const Console = require('Console');

function notFound(req, res) {
    Console.error('[ERROR] Un usuario intentó ingresar a ' + req.originalUrl);
    res.render('error/personalizado', {msg: 'Página no encontrada', return_url: '/'});
}

module.exports = {
    notFound
}