<template>
    <div class="component">
        <h1>This is Employee Component</h1>
        <button @click="changeName">change name</button>
        <p>My name is : {{name}}</p>
        <p>My roll number is : {{rollnumber}}</p>
        <div class="row">
            <h3>Employee Data</h3>
            <div class="col-xs-6">
                <app-employee
                        :name="name"
                        :changeFn="changeName"
                        @nameWasReset = "name = $event"
                        :rollnumber="rollnumber"
                ></app-employee>
            </div>
            <div class="col-xs-6">
                <edit-employee
                        :rollnumber="rollnumber"
                        :resetFn="changeRoll"
                        @rollNumberReset="rollnumber = $event"
                        ></edit-employee>
            </div>
        </div>
    </div>
</template>

<script>
    import EmployeeDetail from './EmployeeDetail';
    import EditEmployee from './EditEmployee.vue'
    export default{
        components:{
            appEmployee:EmployeeDetail,
            editEmployee:EditEmployee
        },
        data() {
            return {
                name:'kirankumar',
                rollnumber:1234
            }

        },
        methods:{
            changeName(){
               return this.name="haresh"
            },
            changeRoll(){
                 this.rollnumber=234
            }
        }
    }
</script>

<style scoped>

        div{
            background-color: #bce8f1;
        }

</style>