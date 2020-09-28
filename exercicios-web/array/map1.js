const nums = [1, 2, 3, 4, 5]

// For com propósito
// o MAP ointernamente tem um for, mas para alem disso transforma cada um dos elementos de um array num novo array do mesmo tamanho
// armazenar o novo array em resultado
let resultado = nums.map(function(e) { // a funcao pode recebr 3 parametros: o rpoprio valor, o indice e o array completo
    //esta apenas recebe o elemento atual
    return e * 2
})
//dentro do map tem a fucao para transformar cada um dos elementos

console.log(resultado, nums)//array do mesmo tamanho mas com os elementos multiplicados por 2

// o MAP nao transforma o array atual, ele gera um novo array

const soma10 = e => e + 10 //temum return implicito, se nao retornar nada vai dar undefined
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //chamar map de forma encadeada
console.log(resultado) //o mesmo ta,anho do array original mas com os valores alterados
//resultado transformado 3 vezes; é possivel trocar a ordem