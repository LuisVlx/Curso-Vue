

const nombre = 'Luis'
const apellido = 'Valencia'

const nombreCompleto = `${ nombre } ${ apellido }`

// console.log(`Resultado: ${ 2 + 8 }`)

function getSaludo( nombre ) {
    return 'Hola ' + nombre
}


console.log(`Este es un texto: ${ getSaludo(nombre) }`)

