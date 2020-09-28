console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
// o array é uma estrutura indexada

aprovados[3] = 'Paulo' //adicionou o quarto elemento
aprovados.push('Abia') //adicionar elemento na ultima posicao do array
console.log(aprovados.length)

aprovados[9] = 'Rafael' //os indices no maio vao ficar undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //ordena por ordem alfabetica ; os elementos vazios vao para o final; altera o array original
console.log(aprovados)

delete aprovados[1]//coloca undifined nessa posiçao mas nao reordena
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//aprovados.splice(1, 1)//permite para adicionar, remover ou ateambos ao mesmo tempo
//a partir do indice 1 elimina um elemento
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
//a partir do index 1 elimina dois elementos e introduz os dois noveos elementos
//substitui os elementos de indice 1 e 2 pelos novos elementos
console.log(aprovados)