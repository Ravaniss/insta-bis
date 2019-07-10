<template>
  <main class="view post">
    <section class="stream">
      <video ref="video" id="video" width="100%" height="300" autoplay></video>
    </section>
  </main>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Post extends Vue {
    video: any

    mounted () {
      this.video = this.$refs.video
      this.video.width = window.innerWidth
      this.video.height = window.innerHeight - 80

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
          video: true
        }).then((stream: any) => {
          this.video.srcObject = stream
          this.video.play()
        }).catch((err: any) => {
          console.log(this.video)
          console.error(err)
        })
      }
    }
  }
</script>
