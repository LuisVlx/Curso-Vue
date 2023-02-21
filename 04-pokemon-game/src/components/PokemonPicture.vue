<template>
    <div class="pokemon-container">
        <img
            class="hidden-pokemon"
            :src="imgSrc"
            alt="pokemon"
            data-aos="zoom-in-up"
            data-aos-duration="800"
        >
        <img
            v-if="showPokemon"
            data-aos="zoom-out"
            :src="imgSrc"
            alt="pokemon"
        >
    </div>
</template>
<script>
export default {
    name: 'PokemonPicture',
    props:{
        pokemonId:{
            type: Number,
            required: true,
            default: 1
        },
        showPokemon:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>

.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    width: 100vw;
    margin-left: -50vw;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>