<template>
  <div class="home">
    Home ! :D
    <button @click="logout()">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  logout() {
    localStorage.removeItem('jwt')
    this.$router.push('/login')
  }
}
</script>
