<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

    <h1> MapState </h1>
    <h2> mapState: {{ count }} </h2>
    <h2> lastMutation: {{ lastMutation }} </h2>

    <!-- Se puede leer de manera directa a los getters -->
    <h2> Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>
    <h2> mapGetter: {{ square }}</h2>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {

    computed:{
        countComputed(){
            return this.$store.state.counter.count
        },

        ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
        /* ...mapState({
            count: state => state.count,
            lastMutation : 'lastMutation'
            lastMutation: state => state.lastMutation
        }) */
        ...mapGetters('counter', {
            square: 'squareCount'
        })
    },
    methods: {
        increment(){
            this.$store.commit('counter/increment')
        },
        incrementBy(){
            this.$store.commit('counter/incrementBy', 5)
            /*            
            mapActions habilita que las acciones 
            puedan ser usadas en los métodos. Ejemplo:
            this.randomInt() 
            */
        },


        // ...mapActions('counter', ['incrementRandomInt']) 
        //Equivalente a:
        ...mapActions('counter', {
            randomInt: 'incrementRandomInt'
        })
        /*         
        Equivalente a: 
        incrementRandomInt(){
            this.$store.dispatch('incrementRandomInt')
        } 
        */
    },
}
</script>
