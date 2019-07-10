<template>
  <div class="login">
    <header>
      <h3>INSTA<span>CLONE</span></h3>
      <h4>Login</h4>
    </header>
    <main class="form-group">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button class="login-btn" @click="logIn()">Log in</button>
      <div class="errorMsg" v-if="hasErrors">
        {{ error }}
      </div>
    </main>
    <footer>
      <p>
        Don't have an account? <router-link to="/register" class="link">Sign up</router-link>.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { mapActions } from 'vuex'
  import store from '@/store'

  @Component({
    store,
    methods: {
      ...mapActions([
        'login'
      ])
    }
  })
  export default class Login extends Vue {
    email: string = 'itsme@gmail.com'
    password: string = 'root'
    hasErrors: boolean = false
    error: string = ''

    public logIn () {
      if (!this.email || !this.password) {
        alert('Please fill in all fields')
        return false
      }

      this.$http.post(this.$store.state.api + 'user/login', {
        email: this.email,
        password: this.password
      }).then((response: any) => {
        if (response.data.auth) {
          this.login()
        } else {
          this.error = response.data.msg
          this.hasErrors = true
        }
      }).catch((err: any) => {
        console.log(err)
      })

    }
  }
</script>

<style lang="scss" scoped>
  .login {
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
