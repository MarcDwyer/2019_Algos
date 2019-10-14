function findEvenIndex(arr) {
    let index = -1
    for (let x = 1; x < arr.length; x++) {
        const before = arr.slice(0, x - 1).reduce((num, item) => num += item, 0)
        const after = arr.slice(x, arr.length).reduce((num, item) => num += item, 0)
        if (before === after) {
            index = x
            break
        }
    }
    return index
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
// [10,-80,10,10,15,35,20]