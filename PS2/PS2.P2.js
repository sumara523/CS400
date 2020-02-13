function* oneWord(str) {
    let arr = str.split(" ")
    for(let word of arr){
        yield word;
    }
}

let mygen = oneWord("All I know is something like a bird within her sang")
for(let result of mygen){
    console.log(result)
}