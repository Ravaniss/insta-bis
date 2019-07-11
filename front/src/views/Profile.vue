<template>
  <main class="view profile">
    <section class="profileHead">
      <strong>Name: </strong>{{ display_name }}
    </section>

    <section class="posts">
      <div
        class="post"
        v-for="post in posts"
        :key="post._id">
        <img :src="post.image" :alt="post.desc" class="postImage">
      </div>
    </section>
  </main>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Profile extends Vue {
    display_name: string = ''
    posts: any = []

    getProfile () {
      this.$http.post(this.$store.state.api + 'user/getprofile', {
        auth_token: localStorage.getItem('jwt')
      }).then(({ data }) => {
        this.display_name = data.details.display_name
        this.posts = data.details.posts
      })
    }

    mounted () {
      this.getProfile()
    }
  }
</script>

<style lang="scss" scoped>
  .profile {
    display: flex;
    flex-direction: column;


    .profileHead {
      background: #171717;
      color: #FFF;
      padding: 15px;
      box-sizing: border-box;
    }

    .posts {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: min-content;
      grid-gap: 5px;
      padding: 5px;

      .post {
        padding: 0;

        .postImage {
          width: 100%;
          display: block;
        }
      }
    }
  }
</style>
