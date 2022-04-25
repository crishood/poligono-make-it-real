/* Ejercicio 2
Escribe una función llamada contraseña que reciba un string
y retorne un nuevo string realizando los siguientes cambios:
Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”. */

const contrasena = str => {
    let newString = ""
    const newArray = str.toLowerCase().replace(/\s+/g, '').split("")
    newArray.map(x=>{
        if(x === "a"){
            newString += "4"
        }
        else if(x === "e"){
            newString += "3"
        }
        else if(x === "i"){
            newString += "1"
        }
        else if(x === "o"){
            newString += "0"
        }
        else {
            newString += x
        }
    })
    return newString
}

console.log(contrasena("hola")); // "h0l4"
console.log(contrasena("esta es una prueba")); // "3st43sun4pru3b4"
console.log(contrasena("")); // ""