const alphabatize = input => {
    const ret = input.split('').sort().join("")
    return ret
}
console.log(`: ${alphabatize("supercalifragilisticexpialidocious")}`)