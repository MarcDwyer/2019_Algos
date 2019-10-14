function curry(n, prev) {
    prev = n || 1
    return curry(n)
}


console.log(curry(3))