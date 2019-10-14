function binarySearch(arr, val) {
    // add whatever parameters you deem necessary - good luck!
    let start = 0,
        end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        console.log(start, mid)
        const item = arr[mid]
        if (item === val) return mid;
        if (item < val) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 8, 9, 10], -6))