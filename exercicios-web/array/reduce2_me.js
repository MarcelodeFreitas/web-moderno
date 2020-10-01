const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const bolsista = aluno => aluno.bolsista

console.log(alunos.filter(bolsista))

//lista dos boleanos
console.log(alunos.map(bolsa => bolsa.bolsista))

//Desafio 1: Todos os alunos são bolsistas?
//criar uma funcao reduce que vai percorrer a lista e indicar se todos os alunos sao bolsistas ou nao
//Falso

const resultado = alunos.map(bolsa => bolsa.bolsista).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)

console.log('______________')
const a = true + false
console.log(!!a)

//Desafio 2: algum aluno é bolsista?
//fazer uma funcao reduce que responde se algum aluno for bolsista
//vai ter de se impletar um metodo que vai alterar o objeto aluno apenas pegando o atributo bolsista
// depois de ter o array de boleanos
//True