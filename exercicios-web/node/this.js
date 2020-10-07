console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
// o this fora de uma funcao aponta para exports
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    // mas dentro de uma funçao ja nao aponta para exports
    console.log(this === exports)
    console.log(this === module.exports)
    // ter cuidado com o this dentro de umafunçao pois aponta para global
    console.log(this === global)
}

logThis()