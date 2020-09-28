
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array, x) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x)
})