<template>
  <h2>{{ customTitle}}</h2>
  <p data-test-id="counter">{{ counter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div class="btns-container">
    <button class="btn" @click="increment()">+1</button>
    <button class="btn" @click="decrement()">-1</button>
  </div>
</template>

<script>
export default {
    name: 'Counter',
    props:{
        title: String,
        start: {
            type: Number,
            default: 100,
            validator(value){
                return value > 5
            }
        }
    },
    data(){
        return{
            counter: this.start,
        }
    },
    methods: {
        getSquareValue(){
            //console.log('getSquareValue')
            return this.counter * this.counter
        },
        increment(){
            this.counter++
        },
        decrement(){
            this.counter--
        }
    },
    computed: {
        squareCounter(){
            //console.log('computed squareCounter')
            return this.counter * this.counter
        },
        customTitle(){ 
            return this.title || 'Counter'
    }
    },
}
</script>

<style scoped>
.btn{
    background-color: #64BB87;
    border-radius: .3125rem;
    border: .0625rem solid white;
    color: white;
    cursor: pointer;
    margin: 0rem .3125rem;
    padding: .3125rem .9375rem;
    transition: 0.3s ease-in-out;
}
.btn:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>