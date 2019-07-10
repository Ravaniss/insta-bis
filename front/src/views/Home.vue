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
export default class Home extends Vue {
}
</script>
