<template>
  <div class="home">
    <h1>HOME</h1>
  </div>
  <div class="user-list">
    <router-link v-for="user in users" :key="user.id" :to="{ name: 'profile', params: { userId: user.id } }">
      {{ user.username }}
    </router-link>
  </div>
</template>

<script>
import { users } from '@/assets/users'
export default {
  name: 'HomeView',

  setup () {
    return {
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
}

.user-list {
  display: flex;
  color: cornflowerblue;
  flex-direction: column;
}
</style>
