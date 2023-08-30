const crypto = require('crypto');
const bcrypt = require('bcrypt');

function decrypt(text, key, res) {
    try {
        let textParts = text.split(':')
        let iv = Buffer.from(textParts.shift(), 'hex')
        let encryptedText = Buffer.from(textParts.join(':'), 'hex')
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
        let decrypted = decipher.update(encryptedText)
        decrypted = Buffer.concat([decrypted, decipher.final()])
        res.json({ message: 'Decrypted word with crypto: ' + decrypted.toString() });
    } catch (error) {
        res.json({ message: error });

    }
}

function compare(text, hash, res) {
    bcrypt.compare(text, hash, function (err, result) {
        if (err) {
            res.json({ message: err });
        }
        res.json({ message: result });
    });
}

module.exports = {
    decrypt,
    compare
};