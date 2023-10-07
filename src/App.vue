<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/listings"> Listings</router-link>
    <button @click="forward">Forward</button>
    <button @click="back">Back</button>
    <button @click="redirect">Redirect</button>
  </nav>
  <router-view/>
</template>

<script>
export default {
  methods: {
    forward(){
      this.$router.go(1)
    },
    back(){
      this.$router.go(-1)
    },
    redirect(){
      this.$router.push({name: 'Listings'})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  background: blue;
  border-radius: 1%;
}
</style>
