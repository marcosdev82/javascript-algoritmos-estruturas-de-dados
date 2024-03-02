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
        var values = [],
        keys = Object.keys(items)

        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values  
    }

    this.getItems = function() {
        return items
    }
}

// var dic = new Dictionary()

// dic.set('Chaves', 'chaves@gmail.com')
// dic.set('Kiko', 'kiko@gmail.com')
// dic.set('Senhor Madruga', 'mr.madruga@gmail.com')

// console.log(dic.has('Chaves'))
// console.log(dic.size())
// console.log(dic.get('Kiko'))
// console.log(dic.keys())
// console.log(dic.values())
// console.log(dic.getItems())
// console.log(dic.delete('Chaves'))
// console.log(dic.getItems())
// console.log(dic.clear())
// console.log(dic.getItems())


function hashTable() {
    var table = []

    this.put = function(key, value) {
        var position = losoLoseHashCode(key)
        console.log(position + ' ' + key)
        table[position] = value
    }

    this.remove = function(key) {
        table[losoLoseHashCode(key)] = undefined
    }

    this.get =  function(key) {
        return table[losoLoseHashCode(key)]
    }

    var losoLoseHashCode = function(key) {
        var hash = 0
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
}

var hash = new hashTable()

hash.put('Chaves', 'chaves@gmail.com')
hash.put('Kiko', 'kiko@gmail.com')
hash.put('Florinda', 'mr.madruga@gmail.com')
hash.remove('Kiko')
console.log(hash.get('Kiko'))