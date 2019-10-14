const dups = arr => {
    return [...new Set(arr)]
}


const arr = [1,1,2,2,3,1,5,6,3,4,1]

console.log(dups(arr))