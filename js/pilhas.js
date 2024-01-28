// LIFO (last in firt out)

// function Stack(){

//     var items = []

//     this.push = function(element){
//         // adiciona um novo item a pilha
//         items.push(element)
//     }

//     this.pop = function(){
//         // remove o item do topo da pilha
//         return items.pop()
//     }

//     this.peek = function(){
//         // devolve o elemento que está no topo da pilha
//         return items[items.length - 1]
//     }

//     this.isEmpty = function(){
//         // informa se a pilha está vazia ou não
//         return items.length === 0
//     }

//     this.clear = function(){
//         // limpa a pilha
//         items = []
//     }

//     this.size = function(){
//         // informar o tamanho da pilha
//         return items.length
//     }

//     this.print = function(){
//         // imprime a pilha no console
//         console.log(items.toString())
//     }

// }

// var pilha = new Stack()
 
// console.log(pilha.isEmpty())

// pilha.push(5)
// pilha.print()

// pilha.push(8)
// pilha.print()

// pilha.push(11)
// pilha.print()

// pilha.push(15)
// pilha.print()

// pilha.pop()
// pilha.print()

// pilha.pop()
// pilha.print()

// pilha.pop()
// pilha.print()

// pilha.pop()

// console.log(pilha.isEmpty())

function dec2Bin(decNumber) {
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString()
    }

    return binaryString;
}

console.log(dec2Bin(25))