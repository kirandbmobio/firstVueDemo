<template>
    <div class="component">
        <h2>This is Edit Employee</h2>
        <p>Employee Roll number {{rollnumber}}</p>
        <button @click="resetFn">change roll number</button>
        <button @click="changeRollNumber">Change Roll Number</button>
    </div>
</template>
<script>
    import { eventBus } from '../main';

    export default {
        props:{
            rollnumber:Number,
            resetFn:Function
        },
        methods:{
            changeRollNumber(){
                this.rollnumber=123;
                eventBus.changeRollN(this.rollnumber);
            }
        }
    }
</script>
<style scoped>
    div{
        background-color: chartreuse;
    }
</style>