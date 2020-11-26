<template>
    <div class="table_div">

        <router-link to="/add_user">Добавить</router-link>

        <br> <br>

        <table ref="tbl" class="table">

             <tbody>
                <tr>
                    <th> id </th>
                    <th> name </th>
                    <th> surname </th>
                    <th> phone </th>
                    <th> email </th>
                    <th> actions </th>
                </tr>
                    <TableItem
                            v-for="user of users" :key="user.id"
                            v-bind:user="user"
                    />

            </tbody>
        </table>

    </div>
</template>

<script>
import TableItem from '../components/TableItem.vue'

export default {
    name: 'Table',
    data() {
        return {
            users: []
        }
    },
    computed: {
        getUsersList() {
            return this.$store.getters.getUsersList || [];
        }
    },
    watch: {
        getUsersList: function(newVal) {
            this.users = newVal
        }
    },
    beforeMount() {
        this.users = this.getUsersList;
    },
    components: {
        TableItem
    },
    methods: {
      
    }
}
</script>

<style>
a {
    display: inline-block;
    text-decoration: none;
    background:rgb(221, 221, 221) ;
    color: rgb(97, 97, 97);
    text-transform: uppercase;
    border-radius: 3px;
    letter-spacing: 1px;
    padding: 15px 20px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    transition: 0.4s ease-in-out;
}

a:hover {
    background:rgb(185, 185, 185) ;
}

.table_div {
   width: 100%;
}

.table {

    min-width: 40%; 
    border: 1px solid grey; 
    border-radius: 3px;
    margin: auto; 

    border-collapse: collapse;
}


</style>