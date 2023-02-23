<template>
    <div class="navbar">
        <!-- <router-link class="btn" :to="{name: 'home'}">Pokemon list</router-link>
        <router-link class="btn" :to="{name: 'pokemon-id', params: {id: 85}}"> Pokemon por id</router-link>
        <router-link class="btn" :to="{name: 'about'}">About</router-link> -->
        <CustomLink
            class="btn"
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import CustomLink from '@/modules/shared/components/CustomLink.vue'
export default {
  components: { CustomLink },
    component:{
        CustomLink: defineAsyncComponent(() => import('@/modules/shared/components/CustomLink.vue'))
    },
    data(){
        return{
            links: [
                {to: 'pokemon-home', name: 'Pokemons'},
                {to: 'pokemon-id', name: 'Por ID', id: 151},
                {to: 'pokemon-about', name: 'About'},
                {to: 'https://google.com', name: 'Google'},
                {to: 'dbz-characters', name: 'Personajes'},
                {to: 'dbz-about', name: 'DBZ About'}
            ]
        }
    }
}
</script>

<style scoped>
.navbar{
    padding: 0 1.875rem;
}
.btn{
    font-weight: bold;
    margin: 0 .625rem;
    text-decoration: none;
}
/* .router-link-exact-active{
    color: #42b983
} */
</style>