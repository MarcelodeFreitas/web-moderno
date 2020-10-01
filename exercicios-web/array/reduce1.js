//reduce
// transformar um array num unico elemento
// tem um paramtro que vai sendo passado de chamada em chamada sempre para a chamada seguinte
// no primeiro parametro tem o acmulador que é o valor que passa par a funcao seguinte

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//se nao se indicar o valor atual começa do segundo elemento
//o primeiro elemento pasa paa valor inicial e o segundo elemento passa para valor atual
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0/*valor inical para o acumulador*/)

//o acumulador pode ter um array, um objeto, um valor
//é flexivel do que map e filter

console.log(resultado)