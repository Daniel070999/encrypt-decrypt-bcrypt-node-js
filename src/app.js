const express = require('express');
const app = express();

const Encrypt = require('../src/encrypt');
const Decrypt = require('../src/decrypt');

const port = 3000;

//defaultKey for crypto= '12345698754124879548752101254-32';

app.use('/crypto/encrypt', function (req, res) {
    const texto = req.headers.text;
    const clave = req.headers.key;
    Encrypt.encryptWithCrypto(texto, clave, res);
});

app.use('/bcrypt/encrypt', function (req, res) {
    const word = req.headers.text;
    Encrypt.encryptWithBcrypt(word, res);
});

app.use('/crypto/decrypt', function (req, res) {
    const texto = req.headers.text;
    const clave = req.headers.key;

    Decrypt.decrypt(texto, clave, res);
});

app.use('/bcrypt/compare', function (req, res) {
    const word = req.headers.text;
    const hash = req.headers.hash;
    Decrypt.compare(word, hash, res);
});

app.listen(port, () => {
    console.log('App Listening on port ' + port);
});
