<template>
    <div class="component">
        <h2>This is Employee Details</h2>
        <p>Employee name is {{name}}</p>
        <p>Employee roll number is {{rollnumber}}</p>
        <button @click="changeFn">change name</button>
        <button @click="resetName">Reset Name</button>
    </div>
</template>
<script>
    import { eventBus } from '../main'
    export default {
        props:{
            name:String,
            changeFn:Function,
            rollnumber:Number
        },
        methods:{
            resetName(){
                this.name="KIRan";
                this.$emit('nameWasReset',this.name);

            }
        },
        created(){
            eventBus.$on('rollNumberReset',(rollnumber)=>{
                this.rollnumber = rollnumber;
            });
        }
    }
</script>
<style scoped>
    div{
        background-color: hotpink;
    }
</style>