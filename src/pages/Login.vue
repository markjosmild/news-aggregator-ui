<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import Joi from "joi"
import axios from 'axios'

const router = useRouter();

const err = ref("");
const user = ref({
  username: "",
  password: "",
});

async function handleLogin() {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })

  try {
    const res = await schema.validateAsync(user.value);
    const response = await axios.post('http://localhost:8700/auth/login', res);
    localStorage.setItem('userId', response.data.id)
    localStorage.setItem('username', response.data.username)
    swal("Success!", "Login successful!", "success");
    router.push("/");
  } catch (error) {
    console.log(error)
    err.value = error.response.data;
  }
}
</script>
<template>
  <div class="container">
    <form class="form">
      <h1>Login</h1>
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="user.username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="user.password" />
      </div>
      <p class="errMessage">
        <span>{{ err }}</span>
      </p>
      <div>
        <input type="submit" @click.prevent="handleLogin()" class="button" value="sign in" />
      </div>
      <p class="message">
        got no account?
        <span>
          <RouterLink to="/register">Sign up</RouterLink>
        </span> here!
      </p>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import "../styles/login.scss";
</style>
