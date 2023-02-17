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
            <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
                <label for="newTwoot"><strong>New Twoot</strong></label>
                <textarea id="newTwoot" v-model="newTwoot.content" rows="4"></textarea>
                <div class="user-profile__create-twoot-type">
                    <label for="newTwootType"><strong>Type: </strong></label>
                    <select id="newTwootType" v-model="newTwoot.type">
                        <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <button>Twoot !!</button>
            </form>
        </div>
        <div class="user-profile__twoots-wrapper">
            <TwotterItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot"
                @addFavoriteEvent="toggleFavorite" />
        </div>
    </div>
</template>

<script>
import TwotterItem from './TwotterItem.vue'

export default {
    name: 'UserProfile',
    data() {
        return {
            newTwoot: {
                content: "", type: "instant" 
            },
            twootTypes: [
                { value: "draft", name: "Draft" },
                { value: "instant", name: "Instant Twoot" },
            ],
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
        }
    },
    watch: {
        followers(newFollowerCount, oldFollowerCount) {
            if (newFollowerCount > oldFollowerCount) {
                console.log("user gained a follower")
            }
        }
    },
    methods: {
        followUser() {
            this.followers++
        },
        toggleFavorite(id) {
            console.log(`favorite twoot with the id: #${id}`)
        },
        createNewTwoot() {
            if (this.newTwoot.content && this.newTwoot.type != "draft") {
                this.user.twoots.unshift({
                    id: this.user.twoots.length + 1,
                    content: this.newTwoot.content
                })
                this.newTwoot.content = ""
            }
        },
    },
    computed: {
        fullName() {
            return `${this.user.firstName} ${this.user.lastName}`;
        }
    },
    mounted() {
        this.followUser()
    },
    components: {
        TwotterItem
    }
}
</script>


<style scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 58px 5%;
}

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

.user-profile__create-twoot {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
}

h1 {
    margin: 0;
}
</style>