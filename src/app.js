const express = require('express');
const app = express();

const Encrypt = require('../src/encrypt');
const Decrypt = require('../src/decrypt');

const port = 3000;

//defaultKey = '12345698754124879548752101254-32';

app.use('/encrypt/:texto/:clave', function (req, res) {
    const texto = req.params['texto'];
    const clave = req.params['clave'];

    res.end(Encrypt.encrypt(texto, clave));
});
app.use('/decrypt/:textoencriptado/:clave', function (req, res) {
    const texto = req.params['textoencriptado'];
    const clave = req.params['clave'];

    res.end(Decrypt.decrypt(texto, clave));
});

app.listen(port, () => {
    console.log('App Listening on port ' + port);
});
