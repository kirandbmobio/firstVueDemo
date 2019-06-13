<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
                <app-employee></app-employee>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';
    import Employee from './components/Employee.vue';
    export default {
        components: {
            appUser: User,
            appEmployee:Employee
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>