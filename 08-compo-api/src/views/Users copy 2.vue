<template>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="user in users" :key="user.id">
                <h4 class="username">{{user.first_name}} {{ user.last_name }}</h4>
                <h6>{{ user.email }}</h6>
            </li>
        </ul>
    </div>

    <button @click="prevPage">Atrás</button>
    <button @click="nextPage">Siguiente</button>
    <span>Página: {{ currentPage }}</span> 
    
</template>

<script>

import useUsers from '@/composables/useUsers'

export default {
    setup() {

        const { 
            currentPage, 
            errorMessage, 
            isLoading, 
            nextPage,
            prevPage,
            users
         } = useUsers()
        
        return{
            currentPage, 
            errorMessage, 
            isLoading, 
            nextPage,
            prevPage,
            users
            //Forma alternativa ...useUsers() no se recomienda
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    width: 100%;
}

div{
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 250px;
    list-style: none;
    padding: 0px;
}
.username{
    color: rgb(0, 105, 70);
}
</style>