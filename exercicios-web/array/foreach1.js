const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x)
})

aprovados.forEach((nome, array) => console.log(nome, array))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)