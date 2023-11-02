<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { watch, ref } from "vue";

const router = useRouter();
const route = useRoute();

const isAuthenticated = ref(false)

watch(route, () => {
  if (!isAuthenticated.value) {
    const check = localStorage.getItem("userId")
    if (check) {
      isAuthenticated.value = true
    }
  }
})

const handleLogout = async () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("username")
  isAuthenticated.value = false
  router.push("/login");
};
</script>
<template>
  <div class="header">
    <RouterLink :class="route.path === '/' ? 'active' : ''" to="/">NEWS AGGREGATOR</RouterLink>
    <div class="nav">
      <RouterLink :class="route.path === '/' ? 'active' : ''" to="/">Home</RouterLink>
      <!-- <RouterLink :class="route.path === '/profile' ? 'active' : ''" to="/profile">Profile</RouterLink> -->
    </div>
    <RouterLink v-if="isAuthenticated" @click="handleLogout" to="/">Logout</RouterLink>
    <RouterLink v-else to="/login">Login</RouterLink>
  </div>
</template>
<style scoped lang="scss">
@import "../styles/navbar.scss";
</style>
