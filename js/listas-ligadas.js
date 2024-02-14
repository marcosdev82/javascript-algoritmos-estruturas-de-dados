function ListasLigadas() {
    var Node = function(element) {
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element) {
        //adiciona um elemento no final da list
        
    }

    this.insert = function(position, element) {
        //adiciona um elemento em uma posição especfica
    }

    this.removeAt = function(position) {
        //remove elemento de uma posição especifica
    }

    this.remove = function(element) {
        //remove o elemento element
    }

    this.indexOf = function(element) {
        //retorna a posição do elemento
    }

    this.isEmpty = function() {
        //retorna se está vazia ou não
    }

    this.size = function() {
        //retorna o tamanho da instancia
    }

    this.toString = function() {
        var current = head,
        string = ''

        while(current) {
            string += current.element + ' '
            current == current.next
        }

        return string
    }

    this.print = function() {
        //imprime no console
        console.log(this.toString())
    }
}