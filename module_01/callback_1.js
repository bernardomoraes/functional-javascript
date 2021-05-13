// With Function Declaration
function exec(fn, a, b) {
    return fn(a,b)
}

function somarNoTerminal(num1, num2) {
    return console.log(num1 + num2)
}

function subtrairNoTerminal(num1, num2) {
    return console.log(num1 - num2)
}

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

// With Arrow Function 
const exe = (fn, a, b) => fn(a,b)
const sumOnTerminal = (n1, n2) => console.log(n1+n2)
const subOnTerminal = (n1, n2) => console.log(n1-n2)

exe(sumOnTerminal, 56, 38)
exe(subOnTerminal, 182, 27)

// Usando callbacks com setInterval 

let c1 = (value = 'C1 Executing...') => {
    console.log(value)
}

setInterval(() => c1('Testing'), 2000)



