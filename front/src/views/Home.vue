<template>
  <main class="feed">
    <article class="post" v-for="post in feed" :key="post.id">
      <header class="postUser">{{ post.display_name }}</header>
      <section class="postPicture">
        <img :src="post.image" alt="post.desc" class="postImage">
      </section>
      <footer class="postDesc">
        <p><strong>{{ post.display_name }}:</strong> {{post.desc}}</p>
        <p class="timestamp">{{ timestampToDate(post.timestamp) }}</p>
      </footer>
    </article>

    <button @click="logout()">
      Logout
    </button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'
import store from '@/store'

@Component({
  store,
  computed: {
    feed () {
      return this.$store.state.feed;
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ])
  }
})
export default class Home extends Vue {
  timestampToDate (timestamp: any) {
    let d = new Date(timestamp)
    let year = d.getFullYear()
    let month: any = d.getMonth() + 1
    if (month < 10) {
      month = '0' + month;
    }

    let day: any = d.getDate()
    if (day < 10) {
      day = '0' + day;
    }
    return day + '/' + month + '/' + year;
  }
}
</script>

<style lang="scss">
  .feed {
    padding: 40px 0;

    .post {
      background-color: #FFF;
      padding-bottom: 15px;

      .postUser {
        display: flex;
        align-items: center;
        height: 30px;
      }

      .postPicture {
        width: 100%;

        .postImage {
          width: 100%;
        }
      }
    }
  }
</style>
