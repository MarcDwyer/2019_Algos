function BinaryTree() {
    this.root = null
}

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}

BinaryTree.prototype.insert = function(val){
    let newNode = new Node(val)
    if (!this.root) {
        this.root = newNode
        console.log(this.root.value)
        return this
    } else {
        let curr = this.root
        while (true) {
            if (val < curr.value) {
                if (!curr.left) {
                    console.log('wtf')
                    curr.left = newNode
                    return this
                } else {
                    console.log('this ran')
                    curr = curr.left
                }
            }
        }
    }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
console.log(tree)
tree.insert(2)

console.log(tree)