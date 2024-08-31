function fibonacci(n){
    let a, b
    a = 0
    b = 1
    while(a<n){
        [a, b] = [b, b+a]
    }
    return a == n
}

let numero = 8
if(fibonacci(numero)){
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`)
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`)
}
