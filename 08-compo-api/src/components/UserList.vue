<template>
    <ul>
        <!-- <li v-for="user in users" :key="user.id">
            <h5>Hola mundo</h5>
        </li> -->
        <slot
            v-for="user in users" :key="user.id"
            :user = "user"
        >

        </slot>
    </ul>
</template>

<script>
export default {
    props:{
        users: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
ul{
    width: 250px;
    list-style: none;
    padding: 0px;
}
</style>