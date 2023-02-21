

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 392817,
        lat: 11.2356,
        lng: 74.182716
    }
}


const persona2 = { ...persona };

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)



