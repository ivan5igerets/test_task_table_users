import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/Table.vue'
import AddUser from '../views/AddUser'
import EditUser from '../views/EditUser'

Vue.use(VueRouter)

const routes = [
   {
    path: '/',
    name: 'Table',
    component: Table
  },
  {
    path: '/add_user',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/edit_user',
    name: 'EditUser',
    component: EditUser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
