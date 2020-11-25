<template>
    <div class="edit_page">
        <h1>Изменить пользователя</h1>
        
        <div class="form">

            <input type="text" placeholder="name" v-model="name">

            <input type="text" placeholder="surname" v-model="surname">

            <input type="text" placeholder="phone" v-model="phone">

            <input type="text" placeholder="email" v-model="email">

        </div>

        <button @click="addition">добавить</button>
        
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
            email: ''
        }
    },
    methods: {
        addition() {
            console.log(this.name);
            console.log(this.surName);
            console.log(this.phone);
            console.log(this.email);
        }
    }
}
</script>