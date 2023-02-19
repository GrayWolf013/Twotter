<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__user-name"> @_{{ user.username }}</h1>
            <h2>{{ userId }}</h2>
            <div class="user-profile__admin-badge" v-if="user.isAdmin">
                Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>followers: </strong>{{ followers }}
            </div>

            <CreateTwootPannel @add-twoot="addTwoot" />
        </div>
        <div class="user-profile__twoots-wrapper">
            <TwotterItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot"
                @addFavoriteEvent="toggleFavorite" />
        </div>
    </div>
</template>

<script>
import TwotterItem from '../components/TwotterItem.vue'
import CreateTwootPannel from '../components/CreateTwootPannel.vue'

import { users } from '@/assets/users'

import { reactive, toRefs, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: 'UserProfile',
    setup() {
        const route = useRoute()
        const userId = computed(() => route.params.userId)

        const state = reactive({
            followers: 0,
            user: users[userId.value - 1] || users[0],
        })

        function followUser() {
            state.followers++
        }

        function toggleFavorite(id) {
            console.log(`favorite twoot with the id: #${id}`)
        }

        function addTwoot(twootContent) {
            state.user.twoots.unshift({
                id: state.user.twoots.length + 1,
                content: twootContent
            })
        }

        onMounted(() => {
            followUser()
        })

        return {
            ...toRefs(state),
        
            userId,

            followUser,
            toggleFavorite,
            addTwoot
        }
    },
    components: {
        TwotterItem,
        CreateTwootPannel
    },
    watch: {
        followers(newFollowerCount, oldFollowerCount) {
            if (newFollowerCount > oldFollowerCount) {
                console.log("user gained a follower")
            }
        }
    },
}

</script>


<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 58px 5%;

    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
    }

    .user-profile__admin-badge {
        background-color: cornflowerblue;
        color: whitesmoke;
        border-radius: 5px;
        margin-right: auto;
        padding: 0 10px;
        font-weight: bold;
    }

    .user-profile__twoots-wrapper {
        display: grid;
        grid-gap: 10px;
    }
}

h1 {
    margin: 0;
}
</style>