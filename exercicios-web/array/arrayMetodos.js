const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // nao se pode atribuir mais nada para a constate pois vai apontar sempre para o mesmo local em memoria
pilotos.pop() // massa quebrou o carro! //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um novo elemento na ultima posicao do array
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona um elemento na primeira posiçao do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')// o 0 significa que nao remove nenhum elemento
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

//Slice ao contario de splice cria um novo array
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)// nvo array com os elementos a partir do indice indicado

const algunsPilotos2 = pilotos.slice(1, 4)//o primeiro elemento é onde começa e entra no array gerado; 
console.log(algunsPilotos2)//o segundo é elemento que indica onde para mas este nao é incluido no novo array