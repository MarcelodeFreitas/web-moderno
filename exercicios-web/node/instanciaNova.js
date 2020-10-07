// Uma factory retorna um novo objeto/instacia
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
} 