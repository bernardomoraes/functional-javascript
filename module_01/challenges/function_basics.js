//somar(3)(4)(5)

    // function declaration
    function somar(a) {
        return function (b) {
            return function (c) {
                return a+b+c
            }
        }
    }
    let somarAB = somar(3)(4)
    console.log(somarAB(-4))

    let result = somar(3)(4)(5)
    console.log(result)

// calcular(3)(7)(fn)
    
    function calcular(a) {
        return function (b) {
            return function (fn) {
                return fn(a,b)
            }
        }
    }

    function multiplicar(a, b) {
        return a*b
    }

    let calcResult = calcular(3)(4)(multiplicar)
    console.log(calcResult)