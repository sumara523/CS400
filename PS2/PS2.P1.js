function* fibs () {
    let [val1, val2, result] = [0, 1, 0] 
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    } 
}

function* evenfibs () { 
    let myFibs = fibs()
    for (let value of myFibs) {      
        if (value % 2 == 0){
            yield value
        }
    } 
}

let myEvenFibs = evenfibs()
let counter = 6;
while (counter --> 0) {
    console.log(myEvenFibs.next().value) 
}
