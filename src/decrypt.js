const crypto = require('crypto');

function decrypt(text, key) {
    try {
        let textParts = text.split(':')
        let iv = Buffer.from(textParts.shift(), 'hex')
        let encryptedText = Buffer.from(textParts.join(':'), 'hex')
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
        let decrypted = decipher.update(encryptedText)

        decrypted = Buffer.concat([decrypted, decipher.final()])

        return ('Palabra desencriptada: ' + decrypted.toString());
    } catch (error) {
        console.log('error: ' + error);
        return (error);
    }
}

module.exports = { decrypt };