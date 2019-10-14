function finder(long, short) {

    for (let x = 0; x < long.length; x++) {
        const pstr = long[x]
        if (pstr === short[0]) {
            let count = 1
            for (let j = count; j < short.length; j++) {
                console.log(x)
                if (long[x + j] !== short[j]) break
                count++
            }
            if (count === short.length) return x
        }
    }
    return -1
}


console.log(finder("louligaglol", "gag"))