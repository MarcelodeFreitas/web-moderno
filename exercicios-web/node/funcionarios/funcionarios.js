// npm init da acesso a um wizard par ao package

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // é um cliente http

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
// o primeiro parametro é um acumulador(funcionario) e o segundo é o valor atual
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
    // se o funcionario for menor que o funcionaro atual, retorna o funcionario caso contrario
    // retorna o funcionario atual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios) // mostra os primeiros 100 elementos

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})

// o ficheiro package.json descreve o projeto
// umm dos randes objetivos desse ficheiro é ter a descriçao de todas as dependencias
// deste modo, usando no  terminal a flag --save significa que par alem de instalar a independencia
// vai colocar aqui as dependencias criadas

// na area das depencias do package.json
// o acento de circuflexo no inicio apenas permite que a versao suba no numero do meio 
// a versao major nao vai ser alterarada
// major minor e fixed : primeiro, segundo e terceiro numero
// apenas permite atualizar para versoes com um fixed diferente

//~apenas o fixed é alterado

//npm install --save-dev axios@0.17.1 -E
//comando para instalar exatamente esta versao
// --save-dev dependencias apenas para desenvolvimento

//package-lock.json guarda as versoes doas packages instaladas