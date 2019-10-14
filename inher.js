function passMe(func, str) {
    let args = arguments
    return func(args[0])
}

function mainfunc(numb, str) {

    console.log('12')
    return `${numb} ${str}`
}

console.log(passMe(mainfunc, 'apple'))