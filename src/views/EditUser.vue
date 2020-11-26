<template>
    <div class="edit_page">
        <h1>Изменить пользователя</h1>
        
        <div class="form">

            <input type="text" placeholder="name" v-model="name">

            <input type="text" placeholder="surname" v-model="surname">

            <input type="text" placeholder="phone" v-model="phone">

            <input type="text" placeholder="email" v-model="email">

        </div>

        {{id}}

        <button @click="edit">править</button>
        
    </div>
</template>

<script>
export default {
    name: 'EditUser',
    data() {
        return {
            name: '',
            surname: '',
            phone: '',
            email: '',
            id: this.$route.params.id
        }
    },
    computed: {
        getUsersList() {
            return this.$store.getters.getUsersList || [];
        }
    },
    methods: {
        edit() {
            let user = {
                id: this.id,
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email: this.email
            }

            this.$store.dispatch('editUser', user)

            this.$router.push('/')
        },
        filling() {
           let users = this.getUsersList
        //    console.log(users);

           for (let user of users) {
               if (this.id == user.id) {

                   this.name = user.name
                   this.surname = user.surname
                   this.phone = user.phone
                   this.email = user.email

                //    console.log('bingo');
                   break
               }
           }
        }
    },
    mounted() {
        this.filling()
    }
}
</script>