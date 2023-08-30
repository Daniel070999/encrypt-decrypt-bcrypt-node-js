const crypto = require('crypto');
const length = 16;

const bcrypt = require('bcrypt');
const saltRounds = 12;

function encryptWithCrypto(text, key, res) {
    try {
        let iv = crypto.randomBytes(length);
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);

        res.json({ message: 'Encrypted word with crypto: ' + iv.toString('hex') + ':' + encrypted.toString('hex') });
    } catch (error) {
        res.json({ message: 'error: ' + error });
    }
}
function encryptWithBcrypt(myPlaintextPassword, res) {
    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
        if (err) {
            res.json({ message: err });
        }
        res.json({ message: 'Encrypted word with Bcrypt: ' + hash });
    });
}

module.exports = {
    encryptWithCrypto,
    encryptWithBcrypt
};