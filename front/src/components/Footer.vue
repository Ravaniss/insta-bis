<template>
  <footer>
    <button @click="goto('/')">Home</button>
    <button>Global</button>
    <button @click="goto('/newpost')">Post</button>
    <button>Notifications</button>
    <button>Profile</button>
  </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Footer extends Vue {
    goto (path: string) {
      this.$router.push(path)
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    height: 40px;
    background-color: #EEE;
    border-top: 1px solid #CCC;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
