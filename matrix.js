function matrixElementsSum(matrix) {
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!matrix[i][j] && matrix[i + 1]) {
                matrix[i + 1][j] = 0
            }
        }
        result.push(...matrix[i])
    }
    return result.reduce((num, i) => num += i, 0)
}


console.log(matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
]))