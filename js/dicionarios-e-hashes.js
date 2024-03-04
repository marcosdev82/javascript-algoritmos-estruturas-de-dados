function ListasLigadas() {

    var Node = function(element) {
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element) {
        //adiciona um elemento no final da list
        var node = new Node(element), 
        current

        // debugger
       
        if (head === null) {
            head = node
        } else {
            current = head
            
            while(current.next) {
                current = current.next
            }

            current.next = node 
        }

        length++
    }

    this.insert = function(position, element) {
        //adiciona um elemento em uma posição especfica
        if (position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if (position === 0) {
                node.next = current
                head = node
            } else {
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }

    // node1 = João  
    // node2 = José
    // node3 = Maria

    this.removeAt = function(position) {
        //remove elemento de uma posição especifica
        if(position > -1 && position < length) {  //true
            // debugger
            var current = head, // node1
            previous, // undefined
            index = 0 

            if (position === 0) {
                head = current.next 
            } else { //
                while(index++ < position) {
                    previous = current  
                    current = current.next  
                }
                previous.next = current.next  
    
            }
           
            length-- //2
            return current.element

        } else {
            return null
        }
    }

    this.remove = function(element) {
        //remove o elemento element
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element) { // José
        //retorna a posição do elemento
        var current = head, // node (José)
        index = 0 // 3
        
        while(current) { // true 
            if (element === current.element){
                return  index// 3
            } 
            index++
            current = current.next // José
        }
        return -1

    }

    this.isEmpty = function() {
        //retorna se está vazia ou não
        return length === 0 
    }

    this.size = function() {
        //retorna o tamanho da instancia
        return length
    }

    this.getHead = function() {
        // retorna node
        return head
    }

    this.toString = function() {
        var current = head
        var string = ''

        while(current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function() {
        //imprime no console
        console.log(this.toString())
    }
}

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

    var ValuePair = function(key, value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return '[' + this.key + ' - ' + this.vallue + ']'
        }
    }

    // this.put = function(key, value) {
    //     var position = losoLoseHashCode(key)
    //     // console.log(position + ' ' + key)
    //     table[position] = value
    // }

    this.put = function(key, value) {
        var position = losoLoseHashCode(key)

        if (table[position] === 'undefined') {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }

    // this.remove = function(key) {
    //     table[losoLoseHashCode(key)] = undefined
    // }

    this.remove = function(key) {
        var position = losoLoseHashCode(key)

        if (table[position] !== undefined) {
            var current = table[position].getHead()

            while(current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element)
                    if (table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }

            if (current.element.key === key) {
                table[position].remove(current.element)
                if (table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
        }
        return false
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

    this.size = function() {
        return table.length
    }

    this.print = function() {
        for(var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + " : " + table[i])
            }
        }
    }
}

var hash = new hashTable()

// hash.put('Chaves', 'chaves@gmail.com')
// hash.put('Kiko', 'kiko@gmail.com')
// hash.put('Florinda', 'mr.madruga@gmail.com')

// hash.remove('Kiko')

// console.log(hash.get('Kiko'))

// console.log(hash.size())

hash.put('Chaves', 'chaves@gmail.com')
hash.put('Kiko', 'kiko@gmail.com')
hash.put('Florinda', 'florinda@gmail.com')
hash.put('Madruga', 'madruga@gmail.com')
hash.put('Barriga', 'barriga@gmail.com')
hash.put('Chiquinha', 'chiquinha@gmail.com')
hash.put('Popis', 'popis@gmail.com')
hash.put('Pati', 'pati@gmail.com')
hash.put('Clotilde', 'clotilde@gmail.com')
hash.put('Girafales', 'girafales@gmail.com')
hash.put('Nhonho', 'nhonho@gmail.com')
hash.put('Jaiminho', 'jaiminho@gmail.com')

hash.print()
