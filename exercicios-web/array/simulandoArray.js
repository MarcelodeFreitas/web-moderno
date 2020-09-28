//simulando um array a partir de um objeto, visto que na realldade é um objeto
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false // a funcao nao é enumeravel, nao aparece qdo se poe o .
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)