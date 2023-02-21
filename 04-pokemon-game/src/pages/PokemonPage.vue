<template>
    <h1 v-if="!pokemon"> Espere por favor... </h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonPicture
          :pokemonId="pokemon.id"
          :showPokemon="showPokemon"
        />
        <PokemonOptions v-if="!showAnswer"
          :pokemons="pokemonArr"
          @selection="checkAnswer"
        />
        <template v-if="showAnswer">
            <h2 data-aos="fade-left">{{ message }}</h2>
            <a class="new-game-btn" @click="newGame()">
                Nuevo juego
            </a> 
        </template>


    </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'
//console.log(getPokemonOptions())


export default {
    name: "PokemonPage",
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random()*4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(selectedId){
            this.showPokemon = true
            this.showAnswer = true
            if(selectedId === this.pokemon.id){
                this.message = `Correcto, ${this.pokemon.name}`
            }else {
                this.message = `Oops, era ${this.pokemon.name}` 
            }
        },
        newGame(){
            this.pokemonArr = []
            this.showPokemon = false
            this.showAnswer = false
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
}
</script>

<style>
.new-game-btn{
    background-color: rgb(21, 145, 87);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-weight: bold;
    height: 30px;
    padding: 8px 16px 8px 16px;
    width: 150px;
}
.new-game-btn:hover{
    background-color: rgb(35, 189, 117);
    transition: 0.5s;
}
</style>