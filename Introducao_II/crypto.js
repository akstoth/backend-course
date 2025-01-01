// Importa crypto

const crypto = require('node:crypto')

const chave = crypto.randomBytes(12).toString('base64')
console.log(chave)

// Muito usado para segurança de acesso, Git e GitHub também
const uuid = crypto.randomUUID()
console.log(uuid)

// SSH: é um autenticador por dupla de chaves pública e privada
// Exportei uma chave pública e o computador também tem uma chave privada, e então é feita uma verificação
// para autenticar
// rsa -> criptografia utilizada no github
const {privateKey, publicKey} = crypto.generateKeyPairSync(
    'rsa', { modulusLength: 2048 }
)
console.log(privateKey)
console.log(publicKey)