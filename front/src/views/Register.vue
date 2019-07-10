<template>
  <div class="register">
    <header>
      <h3>INSTA<span>CLONE</span></h3>
      <h4>Register</h4>
    </header>
    <main class="form-group">
      <input type="text" v-model="forename" placeholder="Forename">
      <input type="text" v-model="surname" placeholder="Surname">
      <input type="email" v-model="email" placeholder="Email" :class="(hasErrors) ? 'err' : ''">
      <input type="password" v-model="password" placeholder="Password">
      <button class="login-btn" @click="register()">Register</button>
      <div class="errorMsg" v-if="hasErrors">
        {{ error }}
      </div>
    </main>
    <footer>
      <p>
        Already registered? <router-link to="/login" class="link">Sign in</router-link>.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  // import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

  @Component
  export default class Register extends Vue {
    forename: string = ''
    surname: string = ''
    email: string = ''
    password: string = ''
    hasErrors: boolean = false
    error: string = ''

    register () {
      if (!this.forename || !this.surname || !this.email || !this.password) {
        alert('Please fill in all fields')
        return false
      }

      this.$http.post(this.$store.state.api + 'user/register', {
        forename: this.forename,
        surname: this.surname,
        email: this.email,
        password: this.password
      }).then((response: any) => {
        if (response.data.auth) {
          localStorage.setItem('jwt', response.data.token)
          this.$router.push('/')
        } else {
          this.error = response.data.msg
          this.hasErrors = true
        }
      }).catch((err: any) => {
        this.error = err
        this.hasErrors = true
      })

    }
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
