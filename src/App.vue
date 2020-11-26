<template>
  <div id="app">

    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    getMaxId() {
      return this.$store.getters.getMaxId;
    }
  },
  mounted() {
    if (this.getMaxId == 0) {

      let users = localStorage.getItem('users')
      users = JSON.parse(users)

      this.$store.dispatch('getLocalSorageData', users)
    }

  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
