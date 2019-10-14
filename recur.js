const recur = (arr) => {
    let goodArry = []
    for (let x = 0; x < arr.length; x++) {
        const item = arr[x]
        if (Array.isArray(item)) {
            goodArry.push(...recur(item))
        } else {
            goodArry.push(item)
        }
    }
    return goodArry
}


const badarry = [1, 2, 3, [4,[5, [6]], [7, 8]], 9, [10]]

console.log(recur(badarry))