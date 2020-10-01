const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//tem menos reuso
//descrev como se quer que seja feito

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//descreve o que se quer que seja feito

// select codigo , nome from clientes where ativo = 1
//é mais declarativo
//esta mais preocupado com o que se quer obter, e nao em como esta a percorrer os dados