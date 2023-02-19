<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">
          Twotter
        </div>
      </router-link>

      <div class="navigation__username">
      <template v-if="user">
        @_{{ user.username  }}
      </template>
      <template v-else>
        Guest user
      </template>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    const store = useStore()
    const user = computed(() => store.state.User.user)
  
    return {
      user
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
