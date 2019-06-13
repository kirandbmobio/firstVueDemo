<template>
    <div class="component">
       <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p> User Age : {{userAge}}</p>
        <button @click="editAge">Change User age</button>
        <button @click="changeAge">Change User age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
        props:{
            userAge:Number,
            changeAge:Function
        },
        methods:{
            editAge() {
                this.userAge = 24
                
                eventBus.$emit('ageWasEdited',this.userAge)
            }
        }
    }
</script>

<style scoped>
 div {
        background-color: lightgreen;
    }
</style>