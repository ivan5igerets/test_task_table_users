<template>
    <div class="table_page">

        <!-- <button>добавить пользователя</button> -->

        <router-link to="/add_user">Добавить</router-link>

        <br> <br>

        <table ref="tbl" class="tbl">
            <!-- тут дожна выводится вся информация через "v-for" -->
            <TableItem
                    v-for="user of users" :key="user.id"
                    v-bind:user="user"
            />
        </table>

        {{getUsersList}}

        <!-- {{users}} -->

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
.tbl {
    border-collapse: collapse; /*убираем пустые промежутки между ячейками*/
    border: 1px solid grey; /*устанавливаем для таблицы внешнюю границу серого цвета толщиной 1px*/
}
td {
    padding: 5px; /* Поля в ячейках */
    border: 1px solid #333;
}

</style>