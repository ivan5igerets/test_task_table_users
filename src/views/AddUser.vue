<template>
    <div class="add_page">
        <h1>добавить пользователя</h1>
        
        <div class="form">

           <input type="text" placeholder="name" v-model="name">

            <input type="text" placeholder="surname" v-model="surname">

            <input type="text" placeholder="phone" v-model="phone">

            <input type="text" placeholder="email" v-model="email">

        </div>

        <button @click="addNewUser">добавить</button>

        <button @click="count">узнать колличество записей</button>
        
    </div>
</template>

<script>

export default {
    name: 'AddUser',
    data() {
        return {
            name: '',
            surname: '',
            phone: '',
            email: ''
        }
    },
    computed: {
        getMaxId() {
             return this.$store.getters.getMaxId || 0;
        }
    },
    methods: {
        count() {
            console.log(this.getMaxId);
        },
        addNewUser() {

            let userData = [
                this.name,
                this.surname,
                this.phone,
                this.email
            ]

            this.$store.dispatch("addNewUserToStore", userData)

            this.$router.push('/')
        }
    }
}
</script>