import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        async getLocalSorageData(ctx, users) {
            ctx.commit('updateUsers', users)
                
            ctx.commit('increaseId', +localStorage.getItem('max_id'))
        },
        async addNewUserToStore(ctx, userData) {

            let user = {
                id: this.state.max_id + 1,
                name: userData[0],
                surname: userData[1],
                phone: userData[2],
                email: userData[3]
            }

            let users = this.state.users || []

            // console.log('users', users);

            if (users != null) {
                users.push(user)
            } 
            // else {
            //     users[0] = user
            // }

            ctx.commit('updateUsers', users)
            ctx.commit('increaseId', this.state.max_id + 1)
        },
        async editUser(ctx, user) {

            let users = this.state.users

            console.log('user', user);
            console.log('users', users.length);

            for(let i = 0; i < users.length; ++i) {

                if (users[i].id == +user.id) {
                    users[i] = user
                    console.log('bungo');
                    break
                }
            }

            ctx.commit('updateUsers', users)
        },
        removeUser(ctx, id) {
            let users = this.state.users

            // console.log('remove', id);

            for(let i = 0; i < users.length; ++i) {
                // console.log(i);
                if (users[i].id == id) {
                    // console.log(users[i].id);
                    users.splice(i, 1)
                    break
                }
            }

            ctx.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            this.state.users = users

            // Vue.set(state.users, users)

            localStorage.setItem('users', JSON.stringify(users));
        },
        increaseId(state, max_id) {
            this.state.max_id = max_id

            localStorage.setItem('max_id', max_id)
        }
    },
    state: {
        users: [],
        max_id: 0
    },
    getters: {
        getUsersList(state) {
            return state.users
        },
        getMaxId(state) {
            return state.max_id
        }
    }
})