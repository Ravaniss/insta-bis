<template>
  <main class="view posts">
    <article class="post" v-for="post in posts" :key="post.id">
      <header class="postUser">{{ post.display_name }}</header>
      <section class="postPicture">
        <img :src="post.image" alt="post.desc" class="postImage">
      </section>
      <footer class="postDesc">
        <p><strong>{{ post.display_name }}:</strong> {{post.desc}}</p>
        <p class="timestamp">{{ timestampToDate(post.timestamp) }}</p>
      </footer>
    </article>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'
import store from '@/store'

@Component({
  store,
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
})
export default class Home extends Vue {
  timestampToDate (timestamp: any) {
    timestamp = Number(timestamp)
    let d = new Date(timestamp)
    let year = d.getFullYear()
    let month: any = d.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }

    let day: any = d.getDate()
    if (day < 10) {
      day = '0' + day
    }
    return day + '/' + month + '/' + year
  }
}
</script>

<style lang="scss">
  .post {
    background-color: #FFF;
    border-bottom: 1px dashed #BBB;
    padding-bottom: 15px;

    .postUser {
      display: flex;
      align-items: center;
      padding: 15px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 18px;
    }

    .postPicture {
      width: 100%;

      .postImage {
        width: 100%;
      }
    }

    .postDesc {
      padding: 15px;

      p {
        color: #171717;
        font-size: 16px;
        margin: 0
      }

      .timestamp {
        color: #AAA;
        font-size: 12px;
        margin-top: 15px;
      }
    }
  }
</style>
