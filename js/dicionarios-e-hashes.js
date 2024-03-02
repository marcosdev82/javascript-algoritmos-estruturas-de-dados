function Dictionary(){
    var items = {}

    this.set = function(key, value) {
        items[key] = value
    }

    this.delete = function(key) {
         if (this.has(key)) {
            delete items[key]
            return true
        }
    }

    this.has = function(key) {
        return items.hasOwnProperty(key)
    }

    this.get = function(key) {
         return this.has(key) ? items[key] : undefined
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