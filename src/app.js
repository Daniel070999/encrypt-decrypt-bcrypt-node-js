const express = require('express');
const app = express();

const Encrypt = require('../src/encrypt');
const Decrypt = require('../src/decrypt');

const port = 3000;

//defaultKey = '12345698754124879548752101254-32';

app.use('/encrypt/:texttoencrypt/:key', function (req, res) {
    const texto = req.params['texttoencrypt'];
    const clave = req.params['key'];

    res.end(Encrypt.encrypt(texto, clave));
});
app.use('/decrypt/:texttodecrypt/:key', function (req, res) {
    const texto = req.params['texttodecrypt'];
    const clave = req.params['key'];

    res.end(Decrypt.decrypt(texto, clave));
});

app.listen(port, () => {
    console.log('App Listening on port ' + port);
});
