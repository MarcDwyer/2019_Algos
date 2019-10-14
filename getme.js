const obj = {
    front: {
        react: [1, 1, 1, 1],
        angular: [1, 1, 1, 1, 1, 1],
        vue: [1]
    },
    back: {
        csharp: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        node: [1],
        java: [1, 1, 1, 1],
        go: [],
        php: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ruby: [1, 1, 1],
        python: [1, 1, 1, 1]
    }
}

const getTotal = () => {
    const front = Object.keys(obj.front).reduce((o, key) => {
        const tot = obj.front[key].reduce((total, i) => total += i, 0);
        o[key] = tot
        o.total += tot
        return o;
    },{total: 0})
    const back = Object.keys(obj.back).reduce((o, key) => {
        const tot = obj.back[key].reduce((total, i) => total += i, 0);
        o[key] = tot
        o.total += tot
        return o;
    },{total: 0})
    return {front, back};
}

console.log(getTotal())