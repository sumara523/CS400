function doFunc (str, input) {
    return input(str);
}
console.log(doFunc("supercalifragilisticexpialidocious", (str) => 
{
    const regex = /c/gi;
    return str.replace(regex, '*c').split("*")
}
))
console.log(doFunc("supercalifragilisticexpialidocious", (str) => 
{
    const originalString = str;
    const regex = /a/gi;
    const modifiedString = str.replace(regex, 'A')
    const numModified = str.split("a").length - 1
    const length =str.length

    let obj = {
        originalString: originalString,
        modifiedString: modifiedString,
        numModified: numModified,
        length: length
    }
    return obj
}
))