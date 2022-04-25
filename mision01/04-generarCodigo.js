/* 
Ejercicio 4
Escribir una función llamada generarCodigo que
reciba un string y retorne un nuevo string con
las dos primeras letras de cada palabra. 
*/
const generarCodigo = str =>{
    let code = ""
    let newStr = str.toLowerCase().split(" ").map(x=>{
        for(let i = 0; i < 2;i++){
            code += x.charAt(i)
        }
    })
    return code  
}

console.log(generarCodigo("hola mundo")) // "homu"
console.log(generarCodigo("juan david berbeo")) // "judabe"
console.log(generarCodigo("")) // ""