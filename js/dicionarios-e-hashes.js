function Dictionary(){
    var items = {}

    this.set = function(key, value) {
        // adiciona um novao item ao dicionário
        items[key] = value
    }

    this.delete = function(key) {
        // remove o valor do dicionário usando a chave
    }

    this.has = function(key) {
        // verifica se a chave existe e retorna um booleano
    }

    this.get = function(key) {
        // devolve um valor específico a partir de um chave
    }

    this.clear = function() {
        // remove todos os itens do dicionário
    }

    this.size = function() {
        // retorna a quantidade de elementos contidos no dicionário
    }

    this.keys = function() {
        // devolve um array com todas as chaves do dicionário 
    }

    this.values = function() {
        // devolve um array com todos os valores do dicionário
    }
}