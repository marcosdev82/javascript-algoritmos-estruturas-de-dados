function BinarySeachTree(){

    var node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    var root = null

    this.insert = function() {
        var newNode = new Node(key)

        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    var insertNode = function(node, newNode) {
        if (newNode.key === node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    this.search = function(key) {
        return searchNode(root, key)
    }

    var searchNode = function(node, key){
        if (node === null) {
            return false
        }

        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key < node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }  

    this.remove = function(key) {
       root = removeNode(root, key)
    }

    var removeNode = function(node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key)
            return node
        } else if (key, node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else {
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            if (node.left === null) {
                node = node.right 
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
            var aux = findMinNode(node.right);
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }

    this.min = function() {
        // retorna a menor chave
    }

    this.max = function() {
        // retorna a maior chave
    }

    this.inOrderTraverse = function() {
        // visita todos os nós da árvore usando um percurso em ordem
    }

    this.preOrderTraverse = function() {
        // visita todos os nós da árevore usando um percurso pré ordem
    }

    


}