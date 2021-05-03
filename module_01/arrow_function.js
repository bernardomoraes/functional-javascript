// transformar função declaration em arrow function

// In Funtion Declaration

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}
let pot2 = potencia(2)
let pot4 = potencia(4)

let r2 = pot2(4)
let r3 = pot4(2)


console.log(potencia(2)(4))
console.log(r2)
console.log(r3)

// In Arrow Function

const pot = base => exp => Math.pow(base, exp)

console.log(pot(2)(4))