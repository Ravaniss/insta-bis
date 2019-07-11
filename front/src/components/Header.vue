<template>
  <header>
    <h3 class="title">
      INSTA<span>CLONE</span>
    </h3>
    <button class="logoutBtn" @click="logout()">
      <i class="material-icons">power_off</i>
    </button>
  </header>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { mapActions } from 'vuex'
  import store from '@/store'

  @Component({
    store,
    methods: {
      ...mapActions([
        'logout'
      ])
    }
  })
  export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 40px;
    background-color: #EEE;
    border-bottom: 1px solid #CCC;

    .title {
      margin: 0;
      padding: 0;
      color: #171717;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      font-weight: 900;
      grid-column: 2/3;

      span {
        font-weight: 300;
      }
    }

    .logoutBtn {
      appearance: none;
      border: none;
      outline: none;
      background: none;
      margin: 0 15px 0 0;
      padding: 0;
      grid-column: 3/4;
      justify-self: end;
    }
  }
</style>
