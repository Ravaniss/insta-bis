<template>
  <main class="view profile">
    <section class="profileHead">
      {{ display_name }}
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
  }
</script>

<style lang="scss">

</style>
