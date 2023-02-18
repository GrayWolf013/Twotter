<template>
    <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot"
        :class="{ '--exeeded': NewTwootCharacterCount > 180 }">
        <label for="newTwoot"><strong>New Twoot</strong> {{ NewTwootCharacterCount }}/180</label>
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
</template>

<script>
import { reactive, toRefs, computed } from 'vue'

export default {
    name: "CreateTwootPannel",
    setup(props, context) {
        const state = reactive({
            newTwoot: {
                content: "", type: "instant"
            },
            twootTypes: [
                { value: "draft", name: "Draft" },
                { value: "instant", name: "Instant Twoot" },
            ],
        })

        const NewTwootCharacterCount = computed(() => state.newTwoot.content.length)

        function createNewTwoot() {
            if (state.newTwoot.content && state.newTwoot.type != "draft") {
                context.emit('add-twoot', state.newTwoot.content)
                state.newTwoot.content = ""
            } 
        }

        return {
            ...toRefs(state),
            NewTwootCharacterCount,
            createNewTwoot
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-profile__create-twoot {
        padding-top: 20px;
        display: flex;
        flex-direction: column;

        &.--exeeded {
            color: red;
            border-color: red;

            button {
                background-color: grey;
                color: white;
                border: none;
            }
        }


        textarea {
            margin-bottom: 10px;
            width: 100%;
            height: 150px;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 4px;
            background-color: #f8f8f8;
            resize: none;
        }

        select {
            width: 100%;
            padding: 20px;
            border: none;
            border-radius: 4px;
            background-color: #f1f1f1;
            margin-bottom: 20px;
        }
    }
</style>