const doEval = (str) => {
    if(str.includes("+")){
        return (left,right) => { return left + right}
    }
    else if(str.includes("-")){
        return (left,right) => {return left - right}
    }
    else if(str.includes("*")){
        return (left,right) => {return left * right}
    }
    else{
        return (left,right) => {return left / right}
    }
}

let expression = '4+2'
let foo = doEval(expression)
console.log(expression + " = " + foo(parseInt(expression.charAt(0)), parseInt(expression.charAt(2))))

expression = '5*7'
foo = doEval(expression)
console.log(expression + " = " + foo(parseInt(expression.charAt(0)), parseInt(expression.charAt(2))))

expression = '6-1'
foo = doEval(expression)
console.log(expression + " = " + foo(parseInt(expression.charAt(0)), parseInt(expression.charAt(2))))

expression = '9/2';
foo = doEval(expression)
console.log(expression + " = " + foo(parseInt(expression.charAt(0)), parseInt(expression.charAt(2))))
