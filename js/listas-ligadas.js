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

var ll = new ListasLigadas()
ll.append('João')
ll.append('José')
ll.append('Maria')
ll.print()
// ll.removeAt(1)
// ll.print()
ll.insert(0, 'Carlos')
ll.print()
ll.insert(2, 'Ana') 
ll.print()

// console.log(ll.indexOf('José'))
// console.log(ll.indexOf('Carlos'))
// console.log(ll.indexOf('Lucas'))
// console.log(ll.remove('Lucas'))
ll.print()