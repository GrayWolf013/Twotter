<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__user-name"> @_{{ user.username }}</h1>
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
import TwotterItem from './TwotterItem.vue'
import CreateTwootPannel from './CreateTwootPannel.vue'

import { reactive, toRefs, onMounted } from 'vue'

export default {
    name: 'UserProfile',
    setup() {
        const state = reactive({
            followers: 0,
            user: {
                id: 1,
                username: "ahmedbe",
                firstName: "Ahmed",
                lastName: "Besbes",
                email: "besbes1995@gmail.com",
                isAdmin: true,
                twoots: [
                    { id: 1, content: "Twotter is AMAZING !! :D" },
                    { id: 2, content: "I am a fan of Star Wars" },
                    { id: 3, content: "Fight Club is an amazing movie" },
                ],
            },
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