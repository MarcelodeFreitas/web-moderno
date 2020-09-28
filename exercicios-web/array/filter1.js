const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// p representa cada um dos produtos
console.log(produtos.filter(function(p) {
    return false //nehum elemento é retornado
    //return true //retorna todos os elementos
    //return p.preco > 2500
}))

//qdo se usa ofilter o array, geralmente, é menor do que o array original

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))