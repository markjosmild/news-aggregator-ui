<script setup>
import { onMounted, ref } from "vue";

const username = ref('Visitor')

onMounted(() => {
  username.value = localStorage.getItem('username')
})

</script>
<template>
  <div class="container">
    <div class="landing">
      <h1>
        Hello, {{ username || "Visitor" }}
      </h1>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../styles/home.scss";
</style>
