const app = Vue.createApp({
/*     template: `
        <h1>Hola mundo</h1>
        <p>{{ true ? 'Activo' : 'Inactivo' }}</p>

    ` */

    data(){
        return{
            quote: 'Hi I\'m Batman',
            author: 'Bruce Wayne',
            message: 'Hola mundo'
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola mundo');
            this.author = 'Luis Valencia'
            
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },

})

app.mount('#app')