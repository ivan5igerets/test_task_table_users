<template>
    <div class="add_page">
        <h1>добавить пользователя</h1>
        
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

        <button @click="addNewUser">добавить</button>        

        <br> <br>

        <form enctype="multipart/form-data">
            
                <div class="field">

                    <label for="file" class="label">Upload File</label>
                    <input 
                        type="file"
                        ref="file"
                        @change="loadFile"
                    />

                </div>

            </form>

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
            email: '',
            file: '',
            usersArr: [],
        }
    },
    computed: {
        getMaxId() {
             return this.$store.getters.getMaxId || 0;
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

            if (this.fieldValidation()) {
                this.$store.dispatch("addNewUserToStore", userData)
                this.$router.push('/')
            } else {
                alert('Заполните все поля')
            }
        },
       
        loadFile(event) {
            const files = event.target.files;

            Array.prototype.forEach.call(files, file => {
                const fileReader = new FileReader();
                fileReader.onload = (event) => {
                    const text = event.target.result;
                    const obj = JSON.parse(text);
                    this.usersArr = obj

                    this.$store.dispatch("importJsonArray", obj)
                    this.$router.push('/')
                }
                fileReader.readAsText(file, "UTF-8");
            })
        }
    }
}
</script>

<style>
.field {
    background: hotpink;
    border: 1px solid blue;
    width: 50%;
    margin: auto;
}

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