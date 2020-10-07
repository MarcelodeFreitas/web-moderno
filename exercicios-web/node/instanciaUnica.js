// node faz cache
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
} 
// este objeto que implementa um contador, tem uma instacia unica pois o node faz cache dos modulos