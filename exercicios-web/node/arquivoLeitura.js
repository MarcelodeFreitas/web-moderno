const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
// uma arquivo grande pode causar congestionamento pq ocupa o event loop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


//é mais simples se for para importar json
//nao é necessa´rio o json parser
const config = require('./arquivo.json')
console.log(config.db)


// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

// o __dirname é uma constante que esta presente em todos os arquivos e modulos do node
// e que representa o diretorio atual 