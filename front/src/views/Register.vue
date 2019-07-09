<template>
  <div class="register">
    <header>
      <h3>INSTA<span>CLONE</span></h3>
      <h4>Register</h4>
    </header>
    <main class="form-group">
      <input type="text" v-model="forename" placeholder="Forename">
      <input type="text" v-model="surname" placeholder="Surname">
      <input type="text" v-model="email" placeholder="Email">
      <input type="text" v-model="password" placeholder="Password">
      <button class="login-btn">Register</button>
    </main>
    <footer>
      <p>
        Already registered? <router-link to="/login" class="link">Sign in</router-link>.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  // import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  @Component
  export default class Register extends Vue {
    email: string = ''
    password: string = ''
    forename: string = ''
    surname: string = ''
  }
</script>

<style lang="scss" scoped>
  .register {
    display: flex;
    flex-flow: column;
    height: 100vh;
    box-sizing: border-box;

    header {
      h3 {
        color: #171717;
        font-size: 28px;
        text-align: center;
        font-weight: 900;

        span {
          font-weight: 300;
        }
      }

      h4 {
        color: #888;
        font-size: 24px;
        text-align: center;
        font-weight: 300;
        margin: 0;
        padding: 0;
      }
    }

    .form-group {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      flex-flow: column;
      padding: 25px;

      input {
        width: 100%;
        height: 30px;
        border: 1px solid #DDD;
        margin-bottom: 15px;
        text-indent: 5px;
        background-color: #EEE;
        outline: none;

        &:hover {
          cursor: pointer;
        }

        &:focus {
          border: 1px solid #AAA;
        }
      }

      button {
        width: 100%;
        height: 30px;
        background: #FFCE00;
        appearance: none;
        border: none;
        outline: none;
        border-radius: 8px;
        color: #171717;
        font-size: 18px;
        font-weight: 700;
      }
    }

    footer {
      width: calc(100% - 50px);
      height: 20px;
      background-color: #EEE;
      box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
      padding: 15px 25px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: #888;
        font-size: 16px;
        line-height: 40px;
        margin: 0;
        padding: 0;
        text-align: center;
      }

      .link {
        color: #E35205;
        text-decoration: none;
        font-weight: 700;
      }
    }
  }
</style>
