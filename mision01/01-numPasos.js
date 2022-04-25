/* Escribe una función llamada numPasos que reciba un número (entero positivo)
y que retorne el número de pasos necesario para reducirlo a cero siguiendo 
estas instrucciones:
Si el número es par, dividirlo por 2, de lo contrario, restarle 1. */

const numPasos = (entero) => {
    let pasos = 0
    let cont = 1
    if(entero > 0){
        while(cont > 0){
            entero % 2 == 0 ? (entero = entero /2) : (entero = entero - 1)
            pasos ++
            cont = entero
        }
    } else {
        return('Ingresa un número entero positivo')
    }
    return(pasos)
}

console.log(numPasos(14))
console.log(numPasos(8))
console.log(numPasos(123))

