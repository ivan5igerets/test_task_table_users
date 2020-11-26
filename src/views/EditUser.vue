<template>
    <div class="edit_page">
        <h1>Изменить данные пользователя</h1>
        
        <div class="form">

            <div class="input-form">
                <input type="text" placeholder="name" v-model="name">
            </div>
            
            <div class="input-form">
                <input type="text" placeholder="surname" v-model="surname">
            </div>

            <div class="input-form">
                <input type="text" placeholder="phone" v-model="phone">
            </div>

            <div class="input-form">
                <input type="text" placeholder="email" v-model="email">
            </div>

        </div>

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
        fieldValidation() {
            this.name = this.name.trim()
            this.surname = this.surname.trim()
            this.phone = this.phone.trim()
            this.email = this.email.trim()

            if ( (this.name == '' || this.surname == '') || (this.phone == '' || this.email == '')) {
                return false
            } else {
                return true
            }
        },
        edit() {
            let user = {
                id: this.id,
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email: this.email
            }

            if (this.fieldValidation()) {
                this.$store.dispatch('editUser', user)
                this.$router.push('/')
            } else {
                alert('Не должно быть пустых полей')
            }

        },
        filling() {
           let users = this.getUsersList

           for (let user of users) {
               if (this.id == user.id) {
                   this.name = user.name
                   this.surname = user.surname
                   this.phone = user.phone
                   this.email = user.email

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

<style>

.input-form {
    padding: 5px 10px;
}

input {
   
    width: 30%;
    padding: 10px 20px;
    margin: 3px 0;
    box-sizing: border-box;
}

button {
    display: inline-block;
    text-decoration: none;
    background:rgb(221, 221, 221) ;
    color: rgb(97, 97, 97);
    text-transform: uppercase;
    border-radius: 3px;
    border: rgb(221, 221, 221);
    letter-spacing: 1px;
    padding: 15px 20px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    transition: 0.4s ease-in-out;
}

button:hover {
    background:rgb(185, 185, 185) ;
}
</style>