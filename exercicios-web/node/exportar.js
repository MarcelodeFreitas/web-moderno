console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

//ficam todos visiveis fora deste ficheiro

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}
// mesmo que se mude a referencia duas evzes aquilo que é impresso
// continua a ser o module exports e nao o exports

console.log(module.exports)

// a forma correta de alterar o valor
// o exports apenas nao sera retornado
module.exports = { publico: true }