<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <p>My name is : {{ name }}</p>
        <p>My age is : {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name" 
                    @nameWasReset=" name = $event"
                    :resetFn="resetName"
                    :userAge="age"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age = $event"
                    :changeAge="changeAge"
                    ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './EditUser.vue';
    
    export default {
        data: function(){
            return {
                name:"Kirankumar",
                age:23
            }
        },
        methods:{
            changeName(){
                return this.name = "KDB"
            },
            resetName(){
                return this.name="Kirankumar"
            },
            changeAge(){
                return this.age = 24
            }
        },
        components:{
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
     div {
        background-color: lightblue;
    }
</style>