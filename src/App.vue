<template>
  <div id="app">
  <nav>
  <div class="navigation__logo">
  Twotter
  </div>
  <div class="navigation__username">
  @_{{ user.username }}
  </div>
  </nav>
    <UserProfile/>
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue'

export default {
  name: 'App',
  components: {
    UserProfile
  },
  data() {
    return {
      user: {
        username: "ahmedBesbes"
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
}

nav {
  width: 100%;
  background-color: coral;
  height: 70px;

  .navigation__logo {
    margin: 20px;
    float: left;
    text-align: center;
    color: #F3F5FA;
    font-weight: bolder;
    font-size: larger;
  }

  .navigation__username {
    margin: 20px;
    float: right;
    text-align: center;
    color: #F3F5FA;
    font-weight: 600;
    font-size: small;
  }
}
</style>
