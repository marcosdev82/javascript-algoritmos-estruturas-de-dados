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
        items = {}
    }

    this.size = function() {
        return Object.keys(items).length
    }

    this.keys = function() {
        return Object.keys(items)
    }

    this.values = function() {
        // devolve um array com todos os valores do dicionário
    }
}