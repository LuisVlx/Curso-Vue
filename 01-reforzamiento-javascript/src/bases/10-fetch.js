

const apiKey = 'YQnG8xqCyq2shbGATEpCX95u0Kb5biNc'
// https://api.giphy.com/v1/gifs/random?api_key=YQnG8xqCyq2shbGATEpCX95u0Kb5biNc

/* Primera forma
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => {
        resp.json()
            .then(resp => console.log(resp))
    }) */

    /* fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json())
    .then( img => {
        console.log(img)
    }) */
    


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json() )
    .then(({ data })=> {
        const { url } = data.images.original

        
        const img = document.createElement('img')
        img.src = url

        document.body.append( img )

    })


