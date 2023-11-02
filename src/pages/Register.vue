<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { object, string } from "yup";
import swal from "sweetalert";
import Joi from "joi"
import axios from 'axios'

// const store = useUserStore();
const router = useRouter();
const err = ref("");
const user = ref({
  username: "",
  password: "",
});

async function handleRegister() {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })

  try {
    const res = await schema.validateAsync(user.value);
    // console.log(user)
    await axios.post('http://localhost:8700/auth/register', res);
    swal("Success!", "Registration successful!", "success");
    router.push("/login");
  } catch (error) {
    console.log(error)
    err.value = error.response.data;
  }
}
</script>
<template>
  <div class="container">
    <form class="form">
      <h1>Registration</h1>
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="user.username" />
      </div>
      <div>
        <label for="lastName">Password</label>
        <input type="password" v-model="user.password" />
      </div>
      <p class="errMessage">
        <span>{{ err }}</span>
      </p>
      <div>
        <input type="submit" @click.prevent="handleRegister()" class="button" value="sign up" />
      </div>
      <p class="message">
        already have an account?
        <span>
          <RouterLink to="/login">Log in</RouterLink>
        </span> here!
      </p>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import "../styles/register.scss";
</style>
