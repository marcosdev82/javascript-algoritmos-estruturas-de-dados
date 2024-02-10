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

// converte decimal para binário
function dec2Bin(decNumber) {//35
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0) { //35/17/8/4/1
        rest = Math.floor(decNumber % 2) //11/1/0/0
        restStack.push(rest) // [1,1,0,0,0,1]
        decNumber = Math.floor(decNumber / 2) // 17/8/4/1
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString()//100011
    }

    return binaryString;
}

// console.log(dec2Bin(35))

function baseConverter(decNumber, base){
    var restStack = [],
    rest,
    baseString = '',
    digits ='123456789ABCDEF'

    while(decNumber > 0) {
        rest = Math.floor(decNumber % base)
        restStack.push(rest)
    }
}