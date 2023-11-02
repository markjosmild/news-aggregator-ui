<script setup>
import { watch } from "vue";
import Navbar from "./components/navbar.vue";
import { RouterView, useRoute, useRouter } from "vue-router";
import swal from "sweetalert";

import { useIdle } from "@vueuse/core";
const { idle, reset } = useIdle(1 * 60 * 1000);

const route = useRoute();
const router = useRouter();

</script>

<template>
  <div class="wrapper">
    <Navbar />
    <RouterView class="container" />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
