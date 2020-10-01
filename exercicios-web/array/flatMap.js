const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

// extrai do aluno a nota
const getNotaDoAluno = aluno => aluno.nota
// extrai da turma  todas as notas
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

//escola é um array de turmas
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
//arrays de notas de cada turma separados

//para ter um unico array com todas as notas de todos os alunos de todas as turmas
//flatmap
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))
//resulta num array com todas as notas dos alunos

//FLATMAP
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)