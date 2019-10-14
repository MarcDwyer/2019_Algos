function bubble(arr) {
    const swap = (arry, i1, i2) => {
        [arry[i1], arry[i2]] = [arry[i2], arry[i1]]
    }
    for (let x = arr.length; x > 0; x--) {
        for (let j = 0; j < x - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

console.log(bubble([110, 6, 3, 2, 1, 10]))