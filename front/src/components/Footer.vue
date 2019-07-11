<template>
  <footer>
    <button
      @click="goto('/')">
      <i class="material-icons">home</i>
    </button>
    <button>
      <i class="material-icons">search</i>
    </button>
    <button
      @click="goto('/newpost')">
      <i class="material-icons">camera</i>
    </button>
    <button>
      <i class="material-icons">announcement</i>
    </button>
    <button
      @click="goto('/profile')">
      <i class="material-icons">account_box</i>
    </button>
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

    button {
      appearance: none;
      border: none;
      outline: none;
      background: none;
    }
  }
</style>
