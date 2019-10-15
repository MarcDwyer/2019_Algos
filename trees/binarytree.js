function BinaryTree() {
    this.root = null
}

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

BinaryTree.prototype.insert = function (val) {
    let newNode = new Node(val)
    if (!this.root) {
        this.root = newNode
        console.log(this.root.value)
        return this
    } else {
        let curr = this.root
        while (true) {
            if (curr.value === val) return null;
            if (val < curr.value) {
                if (!curr.left) {
                    console.log('wtf')
                    curr.left = newNode
                    return this
                }
                curr = curr.left
            } else if (val > curr.value) {
                if (!curr.right) {
                    curr.right = newNode
                    return this
                }
                curr = curr.right
            }
        }
    }
}

BinaryTree.prototype.search = function (value) {
    let count = 0;
    if (this.root) {
        let curr = this.root
        while (true) {
            if (curr.value === value || count > 100) return curr;
            if (value > curr.value) {
                if (curr.right) {
                    curr = curr.right
                } else {
                    return null
                }
            } else if (value < curr.value) {
                if (curr.left) {
                    curr = curr.left
                } else {
                    return null;
                }
            }
            count++
        }
    }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
console.log(tree)
tree.insert(12)
tree.insert(7)
tree.insert(17)
tree.insert(2)

console.log(tree)