module.exports = function(...nomes) { //...nomes representa uma lista de nomes
    return nomes.map(nome => `Boa semana ${nome}!`)
}