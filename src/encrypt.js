const crypto = require('crypto');
const length = 16;

function encrypt(text, key) {
    try {
        let iv = crypto.randomBytes(length);
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);

        return ('Palabra encriptada: ' + iv.toString('hex') + ':' + encrypted.toString('hex'));
    } catch (error) {
        console.log('error: ' + error);
        return (error);
    }
}

module.exports = { encrypt };