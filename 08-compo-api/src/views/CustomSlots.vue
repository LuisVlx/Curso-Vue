<template>
    <h1>Aprendiendo slots</h1>
    <button @click="openModal">Abrir modal</button>

    <Modal
        title="Hola mundo" 
        v-if="isOpen"
        @on:close="closeModal"
    >
        <!-- <h2>Título del modal</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatum delectus amet recusandae, explicabo rem aliquid 
            aspernatur ipsum esse quibusdam, aliquam cupiditate vitae 
            natus eum vero doloribus numquam dolor asperiores. Sequi!
        </p>
        <button>Salir</button> -->
        <template v-slot:body>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatum delectus amet recusandae.
            </p>
        </template>

        <template v-slot:footer>
            <button @click="closeModal">
                Salir
            </button>
        </template>

        <template v-slot:header>
            <h2>Título del modal</h2>
        </template>

        <template v-slot:exposed="{ newTitle }">
            <h2>{{ newTitle }}</h2>
        </template>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
    components: {
        Modal
    },
    setup() {
        const isOpen = ref(false)

        return{
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style>

</style>