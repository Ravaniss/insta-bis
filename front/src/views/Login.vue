<template>
  <div>
    <h3>INSTA-CLONE</h3>
    <div class="form-group">
      <input type="text" v-model="email">
      <input type="text" v-model="password">
      <button class="login-btn">Log in</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Login extends Vue {
    email: string = ''
    password: string = ''
  }
</script>
