const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//const saudacao = require('saudacao')
//console.log(saudacao.ola)

const c = require('./pastaC') //como esta com o nome index.js nao é necessario especificar
// o caminho todo pois por defeito vai pesquisar nesse ficheiro
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)