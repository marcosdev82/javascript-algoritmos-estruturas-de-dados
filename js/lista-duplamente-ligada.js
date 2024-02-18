function ListaDuplamenteLigada() {

    var Node = function(element) {
        this.element = element
        this.next = null
        this.prev = null
    }

    var length = 0
    var head = null
    var tail = null

    this.append = function(element) {
        //adiciona um elemento no final da list
        var node = new Node(element), 
        current
       
        if (head === null) {
            head = node
            tail = node
        } else {
            current = head
            
            while(current.next) {
                current = current.next
                tail = node
            }

            current.next = node 
        }

        length++
    }

    this.insert = function(position, element) {//2, Ana
       if (position > 0 && position <= length) { // 0 - 5
            var node = new Node(element), // node = Ana
            current = head, // Carlos
            previous, // undefined
            index = 0 // 0

            if (position === 0) { // false
                if (!head) { // null
                    head = node
                    tail = node
                } else {
                    node.next = current // joão
                    current.prev = node // Carlos
                    head = node // carlos
                }
            } else if (position === length) { // true
                current = tail // Maria
                current.next = node // Lucas
                node.prev = current // Maria
                tail = node // Lucas
            } else { // false
                while(index++ < position) { // 2 < 2
                    previous = current // João
                    current.current.next // José
                }
                node.next = current // José
                previous.next = node // ana
                current.prev = node // Ana
                node.prev = previous // João
            }
            length++ // 6
            return true
       } else {
            return false
       }
    }

    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            var current = head,
            previous,
            index = 0

            if (position == 0) {
                head = current.next

                if (length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if (position === length - 1) {
                current = tail
                tail = current.prev
                tail.next = null
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element) { 
        var current = head, 
        index = 0
        
        while(current) {
            if (element === current.element){
                return  index
            } 
            index++
            current = current.next 
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

var ll = new ListaDuplamenteLigada()
ll.append('João')
ll.append('José')
ll.append('Maria')
ll.insert(0, 'Carlos')
ll.insert(4, 'lucas')
ll.insert(2, 'Ana') 
ll.print()
