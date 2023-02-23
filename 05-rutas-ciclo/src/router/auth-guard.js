
const isAuthenticatedGuard = (to, from, next) => {

    return new Promise( () => {

        const random = Math.random() * 100

        if(random > 50){
            console.log('Está autenticado')
            next()
            //Se podría llamar después del next el resolve()
        } else {
            console.log('Bloqueado por el isAuthenticatedGuard', random)
            next({name: 'pokemon-home'})
        }
    })
    console.log({to, from, next});

}

export default isAuthenticatedGuard