<script setup>
import { ref, watch } from "vue";
// import { object, string, number } from "yup";
import swal from "sweetalert";
// import { useProfileStore } from "../store/profileStore";
import _ from "lodash";

const store = useProfileStore();
const profileInfo = ref({});
const err = ref("");
const editProfile = ref(false);
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

watch(editProfile, () => {
  profileInfo.value = store.profileInfo;
});

</script>
<template>
  <div class="container">
    <form v-if="editProfile" class="form">
      <h1>Profile Information</h1>
      <div>
        <label for="firstName">First Name</label>
        <input type="text" v-model="profileInfo.first_name" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" v-model="profileInfo.last_name" />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" v-model="profileInfo.age" />
      </div>
      <div>
        <label for="gender">Gender</label>
        <select v-model="profileInfo.gender">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
      <div>
        <label for="city">City</label>
        <input type="text" v-model="profileInfo.city" />
      </div>
      <div>
        <label for="firstName">Email</label>
        <input type="text" v-model="profileInfo.email" />
      </div>
      <div>
        <label for="lastName">Phone</label>
        <input type="text" v-model="profileInfo.phone" />
      </div>
      <p class="errMessage">
        <span style="color: red; font-size: 15px">{{ err }}</span>
      </p>
      <div>
        <input type="submit" @click.prevent="" class="button" value="update" />
      </div>
      <button @click.prevent="editProfile = !editProfile" class="return">
        return
      </button>
    </form>
    <div v-else class="card">
      <div>
        <img src="../assets/profile.jpg" style="width: 100%" />
      </div>
      <div class="profileCard">
        <div>
          <p><span>User ID:</span> {{ 'store.profileInfo.user_id' }}</p>
          <h2>Personal Information</h2>
          <p>
            <span>First name:</span>
            {{ _.upperFirst('store.profileInfo.first_name') }}
          </p>
          <p>
            <span>Last name:</span>
            {{ _.upperFirst('store.profileInfo.last_name') }}
          </p>
          <p><span>Age:</span> {{ 'store.profileInfo.age' }}</p>
          <p><span>Gender:</span> {{ 'store.profileInfo.gender' }}</p>
          <p><span>City:</span> {{ _.upperFirst('store.profileInfo.city') }}</p>
        </div>
        <div>
          <h2>Contact Information</h2>
          <p><span>Email:</span> {{ 'store.profileInfo.email' }}</p>
          <p><span>Phone #:</span> {{ 'store.profileInfo.phone' }}</p>
        </div>
        <button class="button" @click="editProfile = !editProfile">
          Edit your profile
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../styles/profile.scss";
</style>
