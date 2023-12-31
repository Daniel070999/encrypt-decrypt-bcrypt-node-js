# Encrypt and decrypt using crypto and bcrypt in node js
* install express: npm i express
* install bcrypt: npm i bcrypt
* run project: npm start
## _Crypto_
* Encrypt:
```sh
curl --location 'localhost:3000/crypto/encrypt' \
--header 'text: wordtoencrypt' \
--header 'key: 12345698754124879548752101254-32'
```
- Result: 
```sh
{
    "message": "Encrypted word with crypto: f86707dfe9df53c531413bf6b60b2a36:209b221854edb536e8bd89d31ef3a940"
}
```
* Decrypt:
```sh
curl --location 'localhost:3000/crypto/decrypt' \
--header 'text: f86707dfe9df53c531413bf6b60b2a36:209b221854edb536e8bd89d31ef3a940' \
--header 'key: 12345698754124879548752101254-32'
```
- Result:
```sh
{
    "message": "Decrypted word with crypto: wordtoencrypt"
}
```
---
## _Bcrypt_
* Encrypt:
```sh
curl --location 'localhost:3000/bcrypt/encrypt' \
--header 'text: wordtoencrypt'
```
- Result: 
```sh
{
    "message": "Encrypted word with Bcrypt: $2b$12$GPICy7UEGs701UOPkPnGK.E5Zu3T.PtsR4MCQFjCmJ8eDNylUliV6"
}
```
* Compare:
```sh
curl --location 'localhost:3000/bcrypt/compare' \
--header 'text: wordtoencrypt' \
--header 'hash: $2b$12$GPICy7UEGs701UOPkPnGK.E5Zu3T.PtsR4MCQFjCmJ8eDNylUliV6'
```
- Result:
```sh
{
    "message": true
}
```