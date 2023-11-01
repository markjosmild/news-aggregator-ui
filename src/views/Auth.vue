<script setup>
import axios from "axios";
import { ref } from "vue";

const user = ref({
    username: "",
    password: "",
});

async function handleLogin() {
    const res = await axios.post('http://localhost:8700/auth/register', user.value)
    console.log(res)
}
</script>
<template>
    <div class="h-full">
        <div class="flex justify-center items-center flex-col">
            <form class="flex gap-5 flex-col items-center">
                <h1 class="text-2xl bold">REGISTER</h1>
                <div class="flex gap-2">
                    <label>Username</label>
                    <input class="text-black" type="text" v-model="user.username">
                </div>
                <div class="flex gap-2">
                    <label>Password</label>
                    <input class="text-black" type="password" v-model="user.password">
                </div>
                <button @click.prevent="handleLogin" class="p-1 outline">Register</button>
            </form>

            <!-- <form class="flex gap-5 flex-col items-center">
                <h1 class="text-2xl bold">LOGIN</h1>
                <div class="flex gap-2">
                    <label>Username</label>
                    <input class="text-black" type="text" v-model="user.username">
                </div>
                <div class="flex gap-2">
                    <label>Password</label>
                    <input class="text-black" type="text" v-model="user.password">
                </div>
                <button class="p-1 outline">Register</button>
            </form> -->
        </div>
    </div>
</template>