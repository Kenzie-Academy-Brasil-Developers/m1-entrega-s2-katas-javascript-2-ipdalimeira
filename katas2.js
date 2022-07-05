// comece a criar a sua função add na linha abaixo
function add (a, b) {
   let resultadoSoma = a + b
   return resultadoSoma;
}
let resultado = add(3, 5);
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
console.log(resultado)



// ----------------------------------------------------
// comece a criar a sua função multiply na linha abaixo
function multiply (a, b) {
    let numerosMultply = 0
        for (let i =0; i < b; i++){
        numerosMultply = add(a, numerosMultply)
        }

    return numerosMultply;
    
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');
console.log(multiply(4, 6))


// comece a criar a sua função power na linha abaixo
function power (x, n){
    let potencia = 1
    for (let i=0; i<n ; i++){
        potencia = multiply(x, potencia)
    }
    return potencia;
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');
console.log(power(3, 4))



// comece a criar a sua função factorial na linha abaixo
function factorial (chata){
    let fac = 1
    for (let i=1; i<=chata; i++){
        fac = multiply(i, fac)
    }
    return fac;
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
console.log(factorial(5))


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
// usar função Add